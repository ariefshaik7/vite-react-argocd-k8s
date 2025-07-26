import { Terminal, FileText, Folder, Settings, Network, Shield, User, Database, Code, Search, Edit, Trash2, Copy, Move, Eye, Clock } from 'lucide-react';

export const labs = [
  {
    id: 'basic-navigation',
    title: 'Basic Navigation Commands',
    description: 'Learn essential commands for navigating the file system: pwd, ls, cd, and understanding directory structures.',
    difficulty: 'beginner' as const,
    category: 'File System Basics',
    icon: Folder,
    estimatedTime: '15 min',
    theory: {
      overview: 'Navigation commands are the foundation of shell scripting. These commands allow you to move around the file system, understand your current location, and explore directory contents. Mastering these commands is essential for any shell operations.',
      syntax: 'pwd | ls [options] [path] | cd [directory]',
      options: [
        { flag: 'ls -l', description: 'Long format listing with detailed information' },
        { flag: 'ls -a', description: 'Show all files including hidden files (starting with .)' },
        { flag: 'ls -la', description: 'Combination of long format and show all files' },
        { flag: 'ls -h', description: 'Human readable file sizes' },
        { flag: 'cd -', description: 'Change to previous directory' },
        { flag: 'cd ~', description: 'Change to home directory' }
      ],
      examples: [
        {
          command: 'pwd',
          description: 'Print the current working directory path',
          output: '/home/user/documents'
        },
        {
          command: 'ls',
          description: 'List files and directories in current location',
          output: 'file1.txt  file2.txt  directory1  directory2'
        },
        {
          command: 'ls -la',
          description: 'List all files with detailed information',
          output: 'total 16\ndrwxr-xr-x  4 user user  128 Dec 15 10:30 .\ndrwxr-xr-x 20 user user  640 Dec 15 10:25 ..\n-rw-r--r--  1 user user   24 Dec 15 10:30 file1.txt'
        },
        {
          command: 'cd /home/user',
          description: 'Change to the specified directory',
          output: ''
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Use the pwd command to display your current working directory',
        expectedOutput: '/home/user',
        hint: 'Type "pwd" and press Enter'
      },
      {
        id: 'ex2',
        instruction: 'List all files in the current directory using ls',
        hint: 'The basic ls command will show visible files and directories'
      },
      {
        id: 'ex3',
        instruction: 'List all files including hidden ones with detailed information',
        expectedOutput: 'Should show files starting with . and detailed permissions',
        hint: 'Use ls -la to combine long format and show all files'
      }
    ]
  },
  {
    id: 'file-operations',
    title: 'File Operations',
    description: 'Master file manipulation commands: touch, cp, mv, rm, and understanding file permissions and ownership.',
    difficulty: 'beginner' as const,
    category: 'File System Basics',
    icon: FileText,
    estimatedTime: '20 min',
    theory: {
      overview: 'File operation commands are essential for creating, copying, moving, and deleting files. These commands form the backbone of file management in any Unix-like system and are crucial for scripting and automation.',
      syntax: 'touch filename | cp source destination | mv source destination | rm [options] filename',
      options: [
        { flag: 'cp -r', description: 'Copy directories recursively' },
        { flag: 'cp -i', description: 'Interactive mode - prompt before overwriting' },
        { flag: 'rm -r', description: 'Remove directories and their contents recursively' },
        { flag: 'rm -f', description: 'Force removal without prompts' },
        { flag: 'rm -i', description: 'Interactive mode - prompt before each removal' },
        { flag: 'mv -i', description: 'Interactive mode - prompt before overwriting' }
      ],
      examples: [
        {
          command: 'touch newfile.txt',
          description: 'Create a new empty file or update timestamp of existing file',
          output: ''
        },
        {
          command: 'cp file1.txt file2.txt',
          description: 'Copy file1.txt to file2.txt',
          output: ''
        },
        {
          command: 'mv oldname.txt newname.txt',
          description: 'Rename oldname.txt to newname.txt',
          output: ''
        },
        {
          command: 'rm unwanted.txt',
          description: 'Delete the unwanted.txt file',
          output: ''
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Create a new file called "test.txt" using the touch command',
        hint: 'Use touch followed by the filename'
      },
      {
        id: 'ex2',
        instruction: 'Copy test.txt to create a backup called test_backup.txt',
        hint: 'Use cp with source and destination filenames'
      },
      {
        id: 'ex3',
        instruction: 'Rename test_backup.txt to backup.txt using mv',
        hint: 'mv works for both moving and renaming files'
      }
    ]
  },
  {
    id: 'text-processing',
    title: 'Text Processing Commands',
    description: 'Learn powerful text manipulation tools: cat, grep, sed, awk, sort, and uniq for processing file contents.',
    difficulty: 'intermediate' as const,
    category: 'Text Processing',
    icon: Edit,
    estimatedTime: '30 min',
    theory: {
      overview: 'Text processing commands are powerful tools for manipulating, searching, and transforming text data. These commands are essential for log analysis, data processing, and creating sophisticated shell scripts.',
      syntax: 'cat filename | grep pattern filename | sed "s/old/new/g" filename | awk "{print $1}" filename',
      options: [
        { flag: 'grep -i', description: 'Case-insensitive search' },
        { flag: 'grep -n', description: 'Show line numbers' },
        { flag: 'grep -r', description: 'Recursive search in directories' },
        { flag: 'sed -i', description: 'Edit files in-place' },
        { flag: 'sort -n', description: 'Sort numerically' },
        { flag: 'sort -r', description: 'Sort in reverse order' }
      ],
      examples: [
        {
          command: 'cat file.txt',
          description: 'Display the contents of file.txt',
          output: 'Line 1 of the file\nLine 2 of the file\nLine 3 of the file'
        },
        {
          command: 'grep "error" logfile.txt',
          description: 'Search for lines containing "error" in logfile.txt',
          output: '2023-12-15 10:30:15 ERROR: Connection failed\n2023-12-15 10:31:20 ERROR: Invalid user'
        },
        {
          command: 'sed "s/old/new/g" file.txt',
          description: 'Replace all occurrences of "old" with "new" in file.txt',
          output: 'Content with new instead of old text'
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Use cat to display the contents of a file',
        hint: 'cat filename will show the entire file content'
      },
      {
        id: 'ex2',
        instruction: 'Search for the word "error" in a log file using grep',
        hint: 'grep "pattern" filename searches for the pattern in the file'
      },
      {
        id: 'ex3',
        instruction: 'Use sed to replace all occurrences of "test" with "demo" in a file',
        hint: 'Use sed "s/old/new/g" filename for global replacement'
      }
    ]
  },
  {
    id: 'variables-environment',
    title: 'Variables and Environment',
    description: 'Understand shell variables, environment variables, export command, and variable expansion techniques.',
    difficulty: 'intermediate' as const,
    category: 'Shell Scripting Fundamentals',
    icon: Settings,
    estimatedTime: '25 min',
    theory: {
      overview: 'Variables are fundamental to shell scripting, allowing you to store and manipulate data. Environment variables affect how programs run, while shell variables exist only within the current shell session.',
      syntax: 'VARIABLE=value | export VARIABLE=value | echo $VARIABLE | ${VARIABLE}',
      options: [
        { flag: 'export VAR', description: 'Make variable available to child processes' },
        { flag: 'unset VAR', description: 'Remove a variable' },
        { flag: 'env', description: 'Display all environment variables' },
        { flag: 'set', description: 'Display all shell variables' },
        { flag: '$?', description: 'Exit status of last command' },
        { flag: '$$', description: 'Process ID of current shell' }
      ],
      examples: [
        {
          command: 'NAME="John Doe"',
          description: 'Create a shell variable',
          output: ''
        },
        {
          command: 'echo $NAME',
          description: 'Display the value of NAME variable',
          output: 'John Doe'
        },
        {
          command: 'export PATH=$PATH:/new/path',
          description: 'Add a new directory to PATH environment variable',
          output: ''
        },
        {
          command: 'echo "Hello $NAME, today is $(date)"',
          description: 'Variable expansion with command substitution',
          output: 'Hello John Doe, today is Mon Dec 15 10:30:45 EST 2025'
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Create a variable called GREETING with the value "Hello World"',
        hint: 'Use VARIABLE=value syntax (no spaces around =)'
      },
      {
        id: 'ex2',
        instruction: 'Display the value of your GREETING variable using echo',
        expectedOutput: 'Hello World',
        hint: 'Use $VARIABLE to access the variable value'
      },
      {
        id: 'ex3',
        instruction: 'Export your GREETING variable to make it available to subprocesses',
        hint: 'Use the export command'
      }
    ]
  },
  {
    id: 'conditionals-loops',
    title: 'Conditionals and Loops',
    description: 'Master control flow with if statements, case statements, for loops, while loops, and logical operators.',
    difficulty: 'intermediate' as const,
    category: 'Shell Scripting Fundamentals',
    icon: Code,
    estimatedTime: '35 min',
    theory: {
      overview: 'Control structures allow you to create dynamic scripts that make decisions and repeat actions. These are essential for automation and creating robust shell scripts.',
      syntax: 'if [ condition ]; then ... fi | for item in list; do ... done | while [ condition ]; do ... done',
      options: [
        { flag: '[ -f file ]', description: 'Test if file exists and is a regular file' },
        { flag: '[ -d dir ]', description: 'Test if directory exists' },
        { flag: '[ -z string ]', description: 'Test if string is empty' },
        { flag: '[ -n string ]', description: 'Test if string is not empty' },
        { flag: '[ $a -eq $b ]', description: 'Test if numbers are equal' },
        { flag: '[ $a -lt $b ]', description: 'Test if first number is less than second' }
      ],
      examples: [
        {
          command: 'if [ -f "file.txt" ]; then echo "File exists"; fi',
          description: 'Check if a file exists',
          output: 'File exists'
        },
        {
          command: 'for i in 1 2 3; do echo "Number: $i"; done',
          description: 'Simple for loop',
          output: 'Number: 1\nNumber: 2\nNumber: 3'
        },
        {
          command: 'while [ $count -lt 3 ]; do echo $count; ((count++)); done',
          description: 'While loop with counter',
          output: '0\n1\n2'
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Write an if statement to check if a file named "data.txt" exists',
        hint: 'Use [ -f "filename" ] to test for file existence'
      },
      {
        id: 'ex2',
        instruction: 'Create a for loop that prints numbers 1 through 5',
        hint: 'Use for i in {1..5}; do echo $i; done'
      },
      {
        id: 'ex3',
        instruction: 'Write a while loop that counts from 1 to 3',
        hint: 'Initialize a counter and use [ $counter -le 3 ] as condition'
      }
    ]
  },
  {
    id: 'functions',
    title: 'Functions and Scripts',
    description: 'Learn to create reusable functions, understand function parameters, return values, and script organization.',
    difficulty: 'advanced' as const,
    category: 'Shell Scripting Fundamentals',
    icon: Database,
    estimatedTime: '30 min',
    theory: {
      overview: 'Functions allow you to organize code into reusable blocks, making scripts more maintainable and efficient. They can accept parameters and return values, enabling modular programming.',
      syntax: 'function name() { commands; } | name() { commands; } | name parameter1 parameter2',
      options: [
        { flag: '$1, $2, $3...', description: 'Function parameters (positional arguments)' },
        { flag: '$#', description: 'Number of parameters passed to function' },
        { flag: '$@', description: 'All parameters as separate quoted strings' },
        { flag: '$*', description: 'All parameters as single quoted string' },
        { flag: 'return n', description: 'Return exit status from function' },
        { flag: 'local var', description: 'Create local variable within function' }
      ],
      examples: [
        {
          command: 'greet() { echo "Hello $1!"; }',
          description: 'Simple function with one parameter',
          output: ''
        },
        {
          command: 'greet "Alice"',
          description: 'Call the greet function with parameter',
          output: 'Hello Alice!'
        },
        {
          command: 'add() { local result=$(($1 + $2)); echo $result; }',
          description: 'Function that performs calculation',
          output: ''
        },
        {
          command: 'result=$(add 5 3)',
          description: 'Capture function output in variable',
          output: '8'
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Create a function called "say_hello" that prints "Hello World!"',
        hint: 'Use function syntax: name() { commands; }'
      },
      {
        id: 'ex2',
        instruction: 'Create a function that takes a name as parameter and greets that person',
        hint: 'Use $1 to access the first parameter inside the function'
      },
      {
        id: 'ex3',
        instruction: 'Write a function that calculates the square of a number',
        expectedOutput: 'Should return the square of the input number',
        hint: 'Use $(($1 * $1)) for arithmetic calculation'
      }
    ]
  },
  {
    id: 'file-permissions',
    title: 'File Permissions and Ownership',
    description: 'Master chmod, chown, umask commands and understand Unix file permission system and security.',
    difficulty: 'intermediate' as const,
    category: 'System Administration',
    icon: Shield,
    estimatedTime: '25 min',
    theory: {
      overview: 'File permissions control who can read, write, or execute files. Understanding permissions is crucial for system security and proper file management in Unix-like systems.',
      syntax: 'chmod [mode] filename | chown [user]:[group] filename | umask [mask]',
      options: [
        { flag: 'chmod +x', description: 'Add execute permission' },
        { flag: 'chmod 755', description: 'Set permissions using octal notation' },
        { flag: 'chmod -R', description: 'Change permissions recursively' },
        { flag: 'chown user:group', description: 'Change owner and group' },
        { flag: 'chgrp group', description: 'Change group ownership only' },
        { flag: 'umask 022', description: 'Set default file creation permissions' }
      ],
      examples: [
        {
          command: 'ls -l file.txt',
          description: 'View file permissions',
          output: '-rw-r--r-- 1 user group 1024 Dec 15 10:30 file.txt'
        },
        {
          command: 'chmod +x script.sh',
          description: 'Make script executable',
          output: ''
        },
        {
          command: 'chmod 644 document.txt',
          description: 'Set read/write for owner, read-only for others',
          output: ''
        },
        {
          command: 'chown user:group file.txt',
          description: 'Change file ownership',
          output: ''
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Make a script file executable using chmod',
        hint: 'Use chmod +x filename or chmod 755 filename'
      },
      {
        id: 'ex2',
        instruction: 'Set permissions to 644 (rw-r--r--) on a text file',
        hint: 'Use chmod 644 filename'
      },
      {
        id: 'ex3',
        instruction: 'View detailed file permissions using ls -l',
        expectedOutput: 'Should show permission string like -rwxr-xr-x',
        hint: 'ls -l shows detailed file information including permissions'
      }
    ]
  },
  {
    id: 'process-management',
    title: 'Process Management',
    description: 'Learn process control with ps, top, kill, jobs, nohup, and background/foreground process management.',
    difficulty: 'advanced' as const,
    category: 'System Administration',
    icon: Settings,
    estimatedTime: '30 min',
    theory: {
      overview: 'Process management is essential for system administration and automation. Understanding how to monitor, control, and manage processes allows you to effectively use system resources.',
      syntax: 'ps [options] | kill [signal] PID | jobs | nohup command &',
      options: [
        { flag: 'ps aux', description: 'Show all processes with detailed information' },
        { flag: 'ps -ef', description: 'Show all processes in full format' },
        { flag: 'kill -9', description: 'Force kill a process (SIGKILL)' },
        { flag: 'kill -15', description: 'Terminate process gracefully (SIGTERM)' },
        { flag: 'killall name', description: 'Kill all processes with given name' },
        { flag: 'nohup command &', description: 'Run command immune to hangups' }
      ],
      examples: [
        {
          command: 'ps aux',
          description: 'List all running processes',
          output: 'USER  PID %CPU %MEM    VSZ   RSS TTY STAT START   TIME COMMAND\nroot    1  0.0  0.1  15532  1234 ?   Ss   10:00   0:01 /sbin/init'
        },
        {
          command: 'kill 1234',
          description: 'Terminate process with PID 1234',
          output: ''
        },
        {
          command: 'jobs',
          description: 'List active jobs in current shell',
          output: '[1]+  Running                 long_command &'
        },
        {
          command: 'nohup long_script.sh &',
          description: 'Run script in background, immune to hangups',
          output: 'nohup: ignoring input and appending output to \'nohup.out\''
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'List all running processes using ps',
        hint: 'Use ps aux for detailed process information'
      },
      {
        id: 'ex2',
        instruction: 'Show current jobs in the shell',
        hint: 'Use the jobs command'
      },
      {
        id: 'ex3',
        instruction: 'Run a command in the background using nohup',
        hint: 'nohup command & runs command in background'
      }
    ]
  },
  {
    id: 'networking-commands',
    title: 'Networking Commands',
    description: 'Master network utilities: ping, wget, curl, netstat, ssh, and network troubleshooting techniques.',
    difficulty: 'advanced' as const,
    category: 'Network Operations',
    icon: Network,
    estimatedTime: '35 min',
    theory: {
      overview: 'Network commands are essential for system administration, troubleshooting connectivity issues, and automating network operations. These tools help you diagnose problems and interact with remote systems.',
      syntax: 'ping hostname | curl [options] URL | wget [options] URL | ssh user@host',
      options: [
        { flag: 'ping -c 4', description: 'Send only 4 ping packets' },
        { flag: 'curl -o file', description: 'Save output to file' },
        { flag: 'curl -X POST', description: 'Use POST method' },
        { flag: 'wget -r', description: 'Download recursively' },
        { flag: 'netstat -tulpn', description: 'Show listening ports' },
        { flag: 'ssh -p port', description: 'Connect to specific port' }
      ],
      examples: [
        {
          command: 'ping -c 4 google.com',
          description: 'Send 4 ping packets to google.com',
          output: 'PING google.com (142.250.191.14): 56 data bytes\n64 bytes from 142.250.191.14: icmp_seq=0 ttl=55 time=12.3 ms'
        },
        {
          command: 'curl -s https://api.github.com/users/octocat',
          description: 'Fetch data from GitHub API silently',
          output: '{"login":"octocat","id":1,"name":"The Octocat"}'
        },
        {
          command: 'wget https://example.com/file.zip',
          description: 'Download file from URL',
          output: '--2025-12-15 10:30:45--  https://example.com/file.zip\nResolving example.com... 93.184.216.34'
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Ping a website to test connectivity',
        hint: 'Use ping hostname or ping -c count hostname'
      },
      {
        id: 'ex2',
        instruction: 'Use curl to fetch data from a REST API',
        hint: 'curl URL will fetch and display the content'
      },
      {
        id: 'ex3',
        instruction: 'Download a file using wget',
        hint: 'wget URL downloads the file to current directory'
      }
    ]
  },
  {
    id: 'advanced-scripting',
    title: 'Advanced Scripting Techniques',
    description: 'Learn advanced concepts: arrays, associative arrays, regular expressions, command substitution, and error handling.',
    difficulty: 'advanced' as const,
    category: 'Advanced Scripting',
    icon: Code,
    estimatedTime: '40 min',
    theory: {
      overview: 'Advanced scripting techniques enable you to create sophisticated, robust scripts. These concepts include complex data structures, pattern matching, and proper error handling for production-ready scripts.',
      syntax: 'array=(item1 item2) | declare -A assoc_array | $(command) | `command` | [[ string =~ regex ]]',
      options: [
        { flag: '${array[@]}', description: 'All array elements' },
        { flag: '${#array[@]}', description: 'Array length' },
        { flag: 'declare -A', description: 'Declare associative array' },
        { flag: 'set -e', description: 'Exit on error' },
        { flag: 'set -u', description: 'Exit on undefined variable' },
        { flag: 'trap command signal', description: 'Execute command on signal' }
      ],
      examples: [
        {
          command: 'fruits=("apple" "banana" "orange")',
          description: 'Create an array',
          output: ''
        },
        {
          command: 'echo "First fruit: ${fruits[0]}"',
          description: 'Access array element',
          output: 'First fruit: apple'
        },
        {
          command: 'current_date=$(date +%Y-%m-%d)',
          description: 'Command substitution',
          output: ''
        },
        {
          command: 'if [[ "$email" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$ ]]; then echo "Valid email"; fi',
          description: 'Regular expression matching',
          output: 'Valid email'
        }
      ]
    },
    exercises: [
      {
        id: 'ex1',
        instruction: 'Create an array with three different programming languages',
        hint: 'Use syntax: array=("item1" "item2" "item3")'
      },
      {
        id: 'ex2',
        instruction: 'Use command substitution to store the current date in a variable',
        hint: 'Use $(date) or `date` for command substitution'
      },
      {
        id: 'ex3',
        instruction: 'Create a script that validates an email address using regex',
        hint: 'Use [[ string =~ regex ]] for pattern matching'
      }
    ]
  }
];