import "./style.css";
import { Candidate } from "./classes/User";
import { useLocalStore } from "./helpers/useLocalStore";
import { Start } from "./components/Start";
import { Admin } from "./classes/Admin";
import { Navbar } from "./components/Navbar";
import { BetterCallComponent } from "./components/Lose";
import { next } from "./helpers/next";
import { popup } from "./helpers/popup";

const pathname = location.pathname;

document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    const [candidate] = useLocalStore('ucode');
    const paths = ['/login.html', '/register.html'];

    if (pathname === "/test.html") {
      if (!!!Object.keys(candidate || {}).length) {
        location.href = '/register.html';
      }
    }

    if (pathname === "/register.html" || pathname === "/login.html") {
      if (!!Object.keys(candidate || {}).length) {
        location.href = '/test.html';
      }
    }

  }
});

if (pathname === "/register.html") {
  const form = document.querySelector("#register");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = {
      email: form.elements.email.value,
      cin: form.elements.cin.value,
      fullName: form.elements.fullName.value,
      age: form.elements.age.value,
    };
    const candidate = new Candidate(user);
    try {
      candidate.validate();
    } catch (error) {
      popup("warning", "register Incorect", "", "try again");
    }
    const createdCandidate = await candidate.register();
    const [_, setCandidates] = useLocalStore("ucode");
    setCandidates(createdCandidate);
    location.href = "/login.html";
  });
}

if (pathname === "/login.html") {
  const form = document.querySelector("#login");
  const [_] = useLocalStore("ucode");
  if (_) {
    console.log(_.email, _.password);
    form.elements.email.value = _.email;
    form.elements.password.value = _.password;
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const credential = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    const candidate = new Candidate(credential);
    const user = await candidate.login(credential);
    if (user) {
      const [, setUser] = useLocalStore("ucode");
      setUser(user);
      location.href = "/test.html";
    } else {
      popup("warning", "Login Incorect", "", "try again");
    }
  });
}

if (pathname === "/test.html") {
  document.body.insertAdjacentHTML("afterbegin", Navbar());
  const _test = document.querySelector("#_test");
  const [candidate] = useLocalStore('ucode');

  if (!candidate?._test?.start) {
    _test.innerHTML = Start();
  }
  if (candidate.isFailed) {
    document.querySelector("#_test").innerHTML = BetterCallComponent();
  } else {
    if (!candidate?._test?.testOnline) {
      // questions.then(items => {
      //   items.map(item => _test.insertAdjacentHTML('beforeend', QuestionComponent(item)))
      // });
    } else {
      Object.values(candidate._test).filter(Boolean).forEach(() => next());
    }
  }
}

if (pathname === "/admin.html") {
  const admin = new Admin();

  admin.tests.then((tests) => {
    !window.callback
      ? (window.callback = (id) => {
        let x = tests.find((test) => test.id == id);
        admin.generatTxt(x);
      })
      : null;
    tests.map((test) => {
      let tr = `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://picsum.photos/200/240"
                            alt="avatar"
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">${test.fullName
        }</div>
                          <div class="text-sm text-gray-500">${test.email}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">${test.cin}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                                              px-2
                                              inline-flex
                                              text-xs
                                              leading-5
                                              font-semibold
                                              rounded-full
                                                  ${test.isFailed == true
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
        }
                                            "
                      >
                       ${test.isFailed == true ? "passed" : "notpassed"}
                      </span>
                    </td>
                    <td
                      class="
                                            px-6
                                            py-4
                                            whitespace-nowrap
                                            text-right text-sm
                                            font-medium
                                          "
                    >
                      <p herf="" onclick="callback(${test.id})" 
                      class="text-indigo-600 hover:text-indigo-900">
                        Download
                        </p>
                    </td>
                  </tr>
          `;

      let tbody = document.getElementById("tbody");

      tbody.insertAdjacentHTML("beforeend", tr);
    });
  });
}
