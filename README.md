# Nike Clone

This project is a clone of 3 pages of the Nike website, as an individual mission for school. The goal is to replicate the design and some functionalities using HTML, CSS, JavaScript, and Tailwind CSS.

## Table of Contents

- [Project-Overview]
- [Installation]
- [Usage]
- [Features]
- [Technologies-Used]
- [Contributing]
- [Contact]

## Project Overview

This project includes the following pages cloned from the Nike website:

1. Home Page
2. Women Page
3. Kids Page

** Deployed Link ** - [Nike-clone]()

Each page is designed to closely mimic the layout and design of the original Nike website, using only front-end technologies.

## Installation

1. Clone the repository:
    ```bash
    git clone https://git.clp.kr/anbschool/2nd/hexcode/sok-chanseiha/nike-clone
    ```

2. Navigate to the project directory:
    ```bash
    cd nike-clone
    ```

3. Open the `src/page/home/index.html` file in your browser to view the project.

## Usage

After opening `index.html` in your browser, you can navigate through the various sections of the website. Use the navigation menu to access different pages such as the Women, Kids.

## Features

- Responsive design using Tailwind CSS
- Replicated layout and styling of the original Nike website
- Basic navigation between pages
- Reusable components on pages
- Static content to demonstrate the look and feel

## Technologies Used

- HTML
- CSS
- JavaScript
- Tailwind CSS


 **Convention Guide** - [Link Here](https://innovative-bubble-521.notion.site/Journal-Note-895d82621bf4485184d79050df98c3ff?pvs=4)

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

![image](https://shorturl.at/XgqJF)

1. **Understanding Git-Flow**

    This is a git branching strategy diagram. The diagram shows a main branch, develop branch, and feature branches. The feature branches are branched off from the develop branch. The develop branch is branched off from the main branch. The feature branches are merged into the develop branch. The develop branch is merged into the main branch. The main branch is tagged with a version number.

2. **Git-Flow Branching Strategy**

    The Git-Flow branching strategy is designed to manage feature development, bug fixes, and releases in a structured manner. It involves several types of branches: 

    **Main Branch:** 

    - The main branch represents the stable version of the codebase. It contains production code. 
    - Developers should avoid making changes to the main branch. 


    **Feature Branches:**

    - When working on a new feature or bug fix, developers create a feature branch from the main branch. 

    **Development (Develop) Branch:**  

    - Once a feature is complete, it is merged into the development branch. 
    - The development branch waits for upcoming releases.
 

    **Release Branches:** 

    - QA testing, bug fixes, and final adjustments occur in the release branch. 
    - Once everything is stable, the release branch is merged back into both master and development branches. 


    **Bugfix Branch:**

    - A bugfix branch is created specifically to address bugs, defects, or critical issues in the codebase. 
    - It allows developers to work on fixing a specific problem without affecting other ongoing development work.
 

    **Hotfix Branch:**  

    - In case of bugs of security issues in the production code, a hotfix branch is created from the main branch. 
    - After testing, the hotfix branch is merged back into both main and develop.

4. **Git-Flow Strategy: A Step-by-Step Guide**

    **Create a remote repository on GitHub :**

    1. Sign in to your GitHub account at GitHub. 
    1. Click on your profile icon in the top right corner and select “Your repositories” from the dropdown menu. 
    1. Click the green “New” button to create a new repository. 
    1. Fill in the repository details: 
    1. Repository name. 
    1. Description of the repository. 
    1. Choose visibility (public or private). 
    1. Initialize the repository with a README. 
    1. Click the “Create Repository” button. 

    **Create Local Repository :**

    1. **Start with Visual Studio Code :**
    
    - Launch the VS Code and create a new folder for the project.
    - Open the terminal in vs code.

    2. **Start the command git:**
    
    + `git init` (start the git work)
    + `git remote add origin <repository_URL>` (copy the link from the repository).
    + `git config user.name “username”`
    + `git config user.email “email”`
    3. Add files, Commit and Push:
    + `git push -u origin main`
    + `git status` (verify changes).
    4. Start Git-flow work : 
    - Command:
        + `git flow init -d` (start the gitflow work, and automatically create the develop branch).
        + `git push origin develop` (push the develop branch to the remote repository in the GitHub).



    **Conclusion**


    The Git-Flow branching strategy employed in this project offers a clear and organized approach to managing feature development, releases, and bug fixes. By utilizing branches such as main, develop, feature, release, bugfix, and hotfix, the project maintains a well-defined structure, enabling seamless integration of changes and ensuring the stability and reliability of the codebase.	


## Contact

For any questions, feel free to reach out:

- **Sok Chan Seiha** - [sokchanseiha@gmail.com](mailto:sokchanseiha@gmail.com)
- GitLab: [@s](https://git.clp.kr/SokChanSeiha)
