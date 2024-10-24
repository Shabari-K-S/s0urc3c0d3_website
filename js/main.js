var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine("shabari@s0urc3c0d3:~$ <span class=\"error\" >" + command.innerHTML +"</span>", "no-animation", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
        textarea.value = "";
        } else {
        textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
}


function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:sourcecodechannel@gmail.com">sourcecodechannel@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "htb":
      addLine("Opening Hack The Box...", "color2", 0);
      newTab(htb);
      break;
    case "skills":
      loopLines(skills, "color2 margin", 80);
      break;
    case "project --id 1":
      loopLines(project_1, "color2 margin", 80);
      break;
    case "project --id 2":
      loopLines(project_2, "color2 margin", 80);
      break;
    case "project --id 3":
      loopLines(project_3, "color2 margin", 80);
      break;
    case "project --id 4":
      loopLines(project_4, "color2 margin", 80);
      break;
    case "project --id 5":
      loopLines(project_5, "color2 margin", 80);
      break;
    case "project --id 6":
      loopLines(project_6, "color2 margin", 80);
      break;
    case "project --id 7":
      loopLines(project_7, "color2 margin", 80);
      break;
    case "project --id 8":
      loopLines(project_8, "color2 margin", 80);
      break;
    case "project --id 9":
      loopLines(project_9, "color2 margin", 80);
      break;
    case "project --id 10":
      loopLines(project_10, "color2 margin", 80);
      break;
    case "project --id 11":
      loopLines(project_11, "color2 margin", 80);
      break;
    case "project --id 12":
      loopLines(project_12, "color2 margin", 80);
      break;
    case "project --id 13":
      loopLines(project_13, "color2 margin", 80);
      break;
    case "project --id 14":
      loopLines(project_14, "color2 margin", 80);
      break;
    case "project --id 15":
      loopLines(project_15, "color2 margin", 80);
      break;
    case "project --id 16":
      loopLines(project_16, "color2 margin", 80);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
