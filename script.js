const COMMANDS = {
  id:
    'uid=0(root) gid=0(root) groups=0(root)',
  help:
    'Commands: <span class="code">about</span>, <span class="code">exper</span>, <span class="code">edu</span>, <span class="code">skills</span>, <span class="code">proj</span>, <span class="code">contact</span>,<span class="code">certs</span>',
    proj:
    "<a href='https://github.com/rakeshvadnala/wasender' class='success link'>Whatsapp Automation</a>, <br> \
	<a href='https://github.com/rakeshvadnala/LearningWithPy' class='success link'>Python Projects</a>, <br> \
    <a href='https://arduinoprojectsall.blogspot.com/' class='success link'>Arduino and IoT Projects</a><br>",
  about:
    "Hey! 👋<br>I'm Rakesh. I'm a Techie Geek and Software Enthusiast, I live for challenging adventures with the intent of making myself productive and also gaining inexperienced experience in this modern advanced cybersecurity world.",
  skills:
    '<span class="code">Languages:</span> Python, Java, C, SQL<br><span class="code">Technical:</span> Network Pentesting, Kali Linux, System Administration, Vulnerability Assessment, Bash Scripting<br><span class="code">Tools:</span> Metasploit Framework, Nmap, Burpsuite,Maltego, MSFVenom, Wireshark.',
  edu:
    "Vaagdevi Engineering College -Electrical and Electronics Engineering <br>",
  // resume:
  //   "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  exper:
    "I was worked in Jugnoo as an Operational Executive. <br>In College days, I worked as Arudino Mentor<br> Currently working in RNS Technologies as IAM Intern", 
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/rakeshvadnala/' class='success link'>LinkedIn</a> ,<a href='https://www.instagram.com/rakeshvadnala//' class='success link'>Instagram</a>, <a href='https://twitter.com/Rakeshvadnala' class='success link'>Twitter</a>"
  };
let userInput, terminalOutput;

let prevInputs = [];
let lenUp = -1;

const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
    console.log("Application loaded");
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log("Oops! no such command");
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    userInput.innerHTML = input;
    prevInputs.push(input);
    lenUp = prevInputs.length - 1;
    document.getElementById('dummyKeyboard').value = ''
};

const key = function keyEvent(e) {

    const input = document.getElementById('dummyKeyboard').value;
    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = "";
    }


};

const backspace = function backSpaceKeyEvent(e) {

    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
        return;
    }

    if (e.key === 'ArrowUp' && lenUp !== -1) {
        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];
        lenUp--;
        if (lenUp < 0)
            lenUp = prevInputs.length - 1;

        return;
    } else if (e.key === 'ArrowDown' && lenUp !== -1) {

        lenUp++;
        if(lenUp===prevInputs.length)
            lenUp=0;

        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];

        return;

    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};


document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
//Code By RV Tech
