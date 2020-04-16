# EMPlatform
A project built to manage in basic way a little company that sells some products, and applying languages, tools and frameworks like mysql, nodejs, spring, react-native, angular.

## Notes
  * This project was built mainly because i want to remember and practice some tools that i used before, and try to learn better ways to code, :bowtie: if you see a better way to implement some part of the code, i'm glad that you create an issue to help me to map that (error/wrong implementation) to add to the roadmap list :bowtie:
  
  * According with the note placed above, this project could be :facepunch: (with your help) :facepunch: a base to some students and professionals that are looking some code with the languages implemented here.
  
  * Currently i'm not using cloud services because in this moment i don't want to have a profit that help me to maintain a implementation using AWS or GCP, if i later want to use them i would like to deploy all in services like ec2, beanstalk, appengine, rds, s3, GCP storage, and build the infraestructure with terraform to have control in the cloud resources.

## Roadmap
The main implementations that are queued to be implemented in the project are:
 * KMS.
 * LDAP.
 * Request and Response Schema validators.
 * contain the services in docker images.
 * Orchestrate the containers with some tool like minikube, minishift or other tool like that (to define).
 * Open the platform to the clients.
 * Queue tool like rabbit or other (to define).
 * Push notifications with a provider like onesignal in free tier (to define).
 * Improve the security implemented to the services in the first version.
 * Separate the project modules in multiple services.
 * Update the communication way to the database throught ORM's like sequelize (to define).

 ## Considerations about the install projects process
 
  - In this moment the services are exposed throught ngrok, that create a tunnel to localhost and provides a public url.

  - To execute the multiple services the entire ecosystem, i use the wmctrl xdotool packages, following the following [tutorial](https://askubuntu.com/questions/641683/how-can-i-send-commands-to-specific-terminal-windows)

  ##### Thanks to **Jacob Vlijm**, that provided this solution, it's amazing and helped me a lot.

  ##### if the link above doesn't show any info i will explain the process summary...

  Acording to this tutorial, is neccesary to install some packages with this command.

  ```
  sudo apt-get install wmctrl xdotool
  ```

  I use the gnome-terminal so i need to install this adding a new repository to get the packages required.

  i follow this [guideline](https://www.techrepublic.com/blog/linux-and-open-source/how-to-install-gnome-38-on-ubuntu/) to install that

  so i execute the following commands

  ```
  sudo add-apt-repository ppa:gnome3-team/gnome3
  sudo apt-get update && sudo apt-get install gnome-shell ubuntu-gnome-desktop
  ```

  Later i add the file ** command_terminals_handler ** stored in the /server folder in the ~/bin folder and execute: (for some reason, only works for me when the file was in the desktop folder)

  ```
  sudo cp /home/user/Desktop/command_terminals_handler /bin
  ```

  If you see the file doesn't have extension so to convert this file on a executable file it's neccesary to execute:

  ```
  source ~/.profile

  sudo chmod +x command_terminals_handler
  ```

  If the process was completed sucessfully, the behavior of the string is: 

   - to create multiple terminals, execute: 

  ```
   sudo command_terminals_handler -set (numeric amount of terminals) --> 2

  ```

   - to send a command to a specific terminal, execute:

  ```
    command_terminals_handler -run (terminal number) --> 1 (command) --> echo "message"
  ```



  