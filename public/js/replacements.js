// basic regex for any url
var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\(\)\/%?=~_|!:,.;]*[-A-Z0-9+&\(\)@#\/%=~_|])/ig;
var subs = [
  // ansi color substitutions
  { 'type' : 'ansi', 'pattern' : /\r\n/g,     'replacement' : "\n" },
  { 'type' : 'ansi', 'pattern' : /\</g,       'replacement' : '&lt;' },
  { 'type' : 'ansi', 'pattern' : /\>/g,       'replacement' : '&gt;' },
  { 'type' : 'ansi', 'pattern' : /\[1\;31m/g, 'replacement' : '<span class="ansi-brred">' },
  { 'type' : 'ansi', 'pattern' : /\[0\;31m/g, 'replacement' : '<span class="ansi-red">' },
  { 'type' : 'ansi', 'pattern' : /\[1\;32m/g, 'replacement' : '<span class="ansi-brgreen">' },
  { 'type' : 'ansi', 'pattern' : /\[0\;32m/g, 'replacement' : '<span class="ansi-green">' },
  { 'type' : 'ansi', 'pattern' : /\[1\;33m/g, 'replacement' : '<span class="ansi-bryellow">' },
  { 'type' : 'ansi', 'pattern' : /\[0\;33m/g, 'replacement' : '<span class="ansi-yellow">' },
  { 'type' : 'ansi', 'pattern' : /\[1\;34m/g, 'replacement' : '<span class="ansi-brblue">' },
  { 'type' : 'ansi', 'pattern' : /\[0\;34m/g, 'replacement' : '<span class="ansi-blue">' },
  { 'type' : 'ansi', 'pattern' : /\[1\;35m/g, 'replacement' : '<span class="ansi-brmagenta">' },
  { 'type' : 'ansi', 'pattern' : /\[0\;35m/g, 'replacement' : '<span class="ansi-magenta">' },
  { 'type' : 'ansi', 'pattern' : /\[1\;36m/g, 'replacement' : '<span class="ansi-brcyan">' },
  { 'type' : 'ansi', 'pattern' : /\[0\;36m/g, 'replacement' : '<span class="ansi-cyan">' },
  { 'type' : 'ansi', 'pattern' : /\[1\;37m/g, 'replacement' : '<span class="ansi-bright">' },
  { 'type' : 'ansi', 'pattern' : /\[0\;37m/g, 'replacement' : '<span class="ansi-bright">' },
  { 'type' : 'ansi', 'pattern' : /\[4m/g,     'replacement' : '<span class="ansi-underline">' },
  { 'type' : 'ansi', 'pattern' : /\[1m/g,     'replacement' : '<span class="ansi-bright">' },
  { 'type' : 'ansi', 'pattern' : /\[0m/g,     'replacement' : '</span>' },
  { 'type' : 'ansi', 'pattern' : /\[40m/g,     'replacement' : '</span>' },
  { 'type' : 'ansi', 'pattern' : /\[41m/g,     'replacement' : '<span class="ansi-bgred">' },
  { 'type' : 'ansi', 'pattern' : /\[42m/g,     'replacement' : '<span class="ansi-bggreen">' },
  { 'type' : 'ansi', 'pattern' : /\[43m/g,     'replacement' : '<span class="ansi-bgyellow">' },
  { 'type' : 'ansi', 'pattern' : /\[44m/g,     'replacement' : '<span class="ansi-bgblue">' },
  { 'type' : 'ansi', 'pattern' : /\[45m/g,     'replacement' : '<span class="ansi-bgmagenta">' },
  { 'type' : 'ansi', 'pattern' : /\[46m/g,     'replacement' : '<span class="ansi-bgcyan">' },
  { 'type' : 'ansi', 'pattern' : /\[47m/g,     'replacement' : '<span class="ansi-bgwhite">' }
];
