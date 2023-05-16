# Introduction 
An online platform that facilitates complete monitoring of the life cycle of carbon credit products, starting from the forest and extending to the processing mill and final product. This platform enhances transparency and responsibility in the supply chain. 

# Getting Started
File Structure:
```
├── backend/
│   ├── backend/
│   │   └── ...
│   ├── data/
│   │   └── ...
│   ├── static/
│   │   └── ...
│   ├── Dockerfile
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public
│   ├── src
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package-lock.json
│   └── package.json
├── .dockerignore
├── .gitignore
├── docker-compose.yaml
├── README.md
└── venv
```

1.	Installation process
    - Frontend:
        - cd into the "frontend" folder
        - Run
            ```
            npm install
            ```
    - Backend:
        - Create a python virtual environment
            ```
            python3 -m venv <venv_name>
            ```
        - Activate the virtual environment
            ```
            Windows: ./<venv_name>/Scripts/activate 
                - you might have to enable scripts on your system

            Linux: source ./venv/bin/activate
            ```
        - Download the dependencies/packages
            - Make sure to be in /backend
            ```
            pip install -r requirements.txt
            ```

# Build and Test
1. Build/Run
    - 1st Terminal - Frontend: make sure to be in /frontend
        ```
        npm start
        ```
    - 2nd Terminal - Backend: make sure to be in /backend
        ```
        python manage.py runserver
        ```
2. Tests
    - No tests at the moment (05/16/2023)


# Contribute
1. Work Flow
    - Ensure that you are up to date
        ```
        git pull <remote_name> main
        ```
    - Create a new branch (either online or via CLI)
        - CLI:
            ```
            git branch <new_branch_name>
            git checkout <new_branch_name>
            ```
        - Online
            - Navigate the online repo
            - Create a new branch
            ```
            git fetch
            git checkout <new_branch_name>
            ```
    - Upon task completion
        - Push changes to the branch
        - Create a pull request to merge <new_branch_name> with main
        - Wait for approval from reviewer
        - Once approved, squash commits and merge