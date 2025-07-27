# Vite React CI/CD with Jenkins, Docker, Kubernetes & ArgoCD

This project demonstrates a complete DevOps workflow using a Vite React application with a CI/CD pipeline powered by Jenkins, Docker, Kubernetes, and ArgoCD.

## Tools Used

| Tool | Purpose |
| --- | --- |
| **Vite/React** | Frontend web application framework |
| **Jenkins** | CI/CD automation server |
| **Docker** | Application containerization |
| **Kubernetes** | Application deployment and scaling |
| **ArgoCD** | GitOps-based continuous delivery |
| **GitHub** | Source code and deployment manifest hosting |
| **Docker Hub** | Container image registry |

## Step-by-Step Setup Instructions

### 1\. Install Jenkins

```bash
sudo apt update
sudo apt install openjdk-17-jdk -y
wget -q -O - [https://pkg.jenkins.io/debian-stable/jenkins.io.key](https://pkg.jenkins.io/debian-stable/jenkins.io.key) | sudo apt-key add -
sudo sh -c 'echo deb [https://pkg.jenkins.io/debian-stable](https://pkg.jenkins.io/debian-stable) binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y
sudo systemctl enable jenkins
sudo systemctl start jenkins

```

Access Jenkins at `http://<your_ip>:8080`. To get the password:

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

```

Install suggested plugins and also install:

* Docker Pipeline
    
* GitHub Plugin
    

### 2\. Install Docker

```bash
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker jenkins
sudo systemctl restart jenkins

```

### 3\. Install Kubernetes CLI and Start Cluster

```bash
curl -LO "[https://dl.k8s.io/release/$(curl](https://dl.k8s.io/release/$(curl) -s [https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl](https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl)"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

```

Start your Kubernetes cluster using your preferred method (e.g., Minikube, Kind, etc.).

### 4\. Install and Configure ArgoCD

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f [https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml](https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml)
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "NodePort"}}'
kubectl get svc argocd-server -n argocd

```

Get the ArgoCD password and access it from your browser:

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo

```

### 5\. Add Credentials in Jenkins

Go to **Manage** Jenkins &gt; Credentials &gt; **System &gt; Global credentials &gt; Add Credentials**:

* **GitHub Token:**
    
    * **Kind:** `Secret text`
        
    * **ID:** `github`
        
    * **Secret:** Your GitHub Personal Access Token with `repo` scope.
        
* **Docker Hub Credentials:**
    
    * **Kind:** `Username with password`
        
    * **ID:** `dockerhub`
        
    * **Username:** Your Docker Hub username.
        
    * **Password:** Your Docker Hub password or access token.
        

### 6\. Configure ArgoCD Application

Use the ArgoCD UI to configure your application:

* **Git Repo:** Link to your deployment manifest repo 
    
* **Path:** `shell-lab-manifests`
    
* **Namespace:** `default` (or your target namespace)
    
* **Sync:** Auto or Manual
    

Ensure the service in your `service.yml` is of type `NodePort` to allow browser access.

## Jenkins Pipeline Flow

1. **Pull code** from the application's GitHub repository.
    
2. **Install dependencies and build** the Vite/React app using `npm`.
    
3. **Build a Docker image** and push it to Docker Hub.
    
4. **Update the** `deployment.yml` in the separate GitOps repository with the new image tag.
    
5. **Push** the updated YAML back to the GitOps repository.
    
6. **ArgoCD detects the change** and automatically deploys the new version to Kubernetes.
    

### This project demonstrates a complete end-to-end DevOps CI/CD pipeline for a Vite/React web application using Jenkins, Docker, Kubernetes, and ArgoCD.