const blogs = [
  {
    id: "firmware-security",
    title: "Firmware-Level Security and Modern Threat Vector Mitigation",
    date: "August 2026",
    content: `
      <h2>Firmware-Level Security & Threat Mitigation</h2>
      <div class="blog-date">Published: August 2026 | Category: Cybersecurity</div>
      <p>Modern endpoint security frameworks often struggle to detect execution vectors residing below the operating system context. In software architecture designs like StealthGuard, hardware-adjacent verification mechanisms ensure persistence resilience against runtime tampering.</p>
      <br/>
      <p>By leveraging secure enclave calls and cryptographically signed status heartbeats, low-level recovery mechanisms can safely monitor device integrity even when upper-layer operating system kernels are compromised.</p>
    `
  },
  {
    id: "a-i-ethics",
    title: "Deploying Responsible AI Frameworks in Enterprise Systems",
    date: "June 2026",
    content: `
      <h2>Deploying Responsible AI Frameworks</h2>
      <div class="blog-date">Published: June 2026 | Category: Artificial Intelligence</div>
      <p>As autonomous models integrate into enterprise workflows, auditability and threat modeling become non-negotiable requirements. Responsible governance requires real-time monitoring of inference outputs, context integrity, and strict access constraints.</p>
      <br/>
      <p>Establishing transparent validation pipelines protects sensitive user vectors while providing high availability for complex downstream operations.</p>
    `
  },
  {
    id: "smart-contracts",
    title: "Static Analysis & Formal Audit Methodologies in Web3 Architecture",
    date: "April 2026",
    content: `
      <h2>Static Analysis & Smart Contract Audits</h2>
      <div class="blog-date">Published: April 2026 | Category: Web3 & Blockchain</div>
      <p>Auditing decentralized state logic requires static analysis alongside strict formal verification techniques. Using strongly-typed ecosystems like Rust and Aiken reduces common execution flaws, preventing unexpected state transitions across protocol operations.</p>
    `
  }
];

const input = document.getElementById("cli-input");
const outputArea = document.getElementById("output-area");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    runCommand(command);
    input.value = "";
  }
});

function runCommand(cmd) {
  if (!cmd) return;

  const history = document.createElement("div");
  history.className = "history-line";
  history.innerHTML = `<span class="prompt">david@security-box:~$</span> ${cmd}`;
  outputArea.appendChild(history);

  const response = document.createElement("div");

  switch (cmd) {
    case "help":
      response.innerHTML = `
        Available commands:<br/>
        - <span class="cmd-highlight">about</span> : Brief professional background<br/>
        - <span class="cmd-highlight">skills</span> : Core technical domain expertise<br/>
        - <span class="cmd-highlight">projects</span> : Highlighted engineering projects<br/>
        - <span class="cmd-highlight">blogs</span> : Open Linux window with technical writeups<br/>
        - <span class="cmd-highlight">contact</span> : Professional social channels and email<br/>
        - <span class="cmd-highlight">clear</span> : Clear console window output
      `;
      break;

    case "about":
      response.innerHTML = `
        <strong>David Githaiga</strong><br/>
        Software Engineer | Cybersecurity & AI Specialist | Decentralized Systems<br/>
        President @ MMU ISACA Student Group | Founder @ DevBytes Solutions<br/>
        Global Ambassador @ Global Council for Responsible AI
      `;
      break;

    case "skills":
      response.innerHTML = `
        <strong>Technical & Domain Stack:</strong><br/>
        • <strong>Cybersecurity & SOC:</strong> Forensics, Pen Testing, Threat Hunting, Vulnerability Scanning<br/>
        • <strong>Full-Stack:</strong> Python (Django), React, Node.js, JavaScript, Tailwind CSS, REST APIs<br/>
        • <strong>Web3 / Blockchain:</strong> Smart Contract Auditing, Rust, Aiken, Solana, Lisk<br/>
        • <strong>Systems:</strong> Parrot OS, Kali Linux, Bash, Docker, Git
      `;
      break;

    case "projects":
      response.innerHTML = `
        <strong>Featured Projects:</strong><br/>
        1. <strong>StealthGuard:</strong> Firmware-level security recovery and tracking suite.<br/>
        2. <strong>#NikoKadi:</strong> Web-based civic verification portal.<br/>
        3. <strong>UZIA Africa:</strong> Multi-tenant B2B marketplace platform.<br/>
        4. <strong>Kazi Connect:</strong> Recruitment & workforce management backend.<br/>
        5. <strong>MMU ISG Hacknight:</strong> Led overnight technical security hackathon.
      `;
      break;

    case "blogs":
    case "writeups":
      toggleBlogWindow(true);
      response.innerHTML = `Opened Blogs & Technical Writeups window.`;
      break;

    case "contact":
      response.innerHTML = `
        • <strong>GitHub:</strong> github.com<br/>
        • <strong>LinkedIn:</strong> linkedin.com<br/>
        • <strong>Agency:</strong> DevBytes Solutions<br/>
        • <strong>Location:</strong> Nairobi, Kenya
      `;
      break;

    case "clear":
      outputArea.innerHTML = "";
      return;

    default:
      response.innerHTML = `Command not found: ${cmd}. Type <span class="cmd-highlight">help</span> for options.`;
  }

  outputArea.appendChild(response);
  document.getElementById("terminal-body").scrollTop = document.getElementById("terminal-body").scrollHeight;
}

function toggleBlogWindow(show) {
  const win = document.getElementById("blog-window");
  if (show === undefined) {
    win.classList.toggle("hidden");
  } else if (show) {
    win.classList.remove("hidden");
  } else {
    win.classList.add("hidden");
  }

  if (!win.classList.contains("hidden")) {
    renderBlogList();
  }
}

function renderBlogList() {
  const list = document.getElementById("blog-list");
  list.innerHTML = "";
  blogs.forEach((blog, index) => {
    const li = document.createElement("li");
    li.textContent = blog.title;
    li.onclick = () => showBlogContent(index, li);
    list.appendChild(li);
  });

  if (blogs.length > 0) {
    showBlogContent(0, list.children[0]);
  }
}

function showBlogContent(index, element) {
  document.querySelectorAll("#blog-list li").forEach(li => li.classList.remove("active"));
  if (element) element.classList.add("active");
  document.getElementById("blog-content").innerHTML = blogs[index].content;
}

// Draggable Window Logic
const winHeader = document.getElementById("window-header");
const win = document.getElementById("blog-window");
let isDragging = false, offsetP = [0, 0];

winHeader.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetP = [win.offsetLeft - e.clientX, win.offsetTop - e.clientY];
});

document.addEventListener("mouseup", () => isDragging = false);

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    win.style.left = (e.clientX + offsetP[0]) + "px";
    win.style.top = (e.clientY + offsetP[1]) + "px";
  }
});
