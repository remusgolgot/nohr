Main Stories:
TD : Different Home page for company and expert 
TD : Company can add new Jobs (Job Form to be part of a different page)
TD : Any new job added is then tied to the company (visible in the job board) -> replace META
 -> Pull company name from user during job creation
TD : User cannot add job (cannot access job form page & API is protected)
TD : Company cannot see other company jobs in its own Dashboard
TD : Job Board to be a different page
=========================================================
Technical Debt:
TD : Pull job type valid values from the same source (mongoose & backend validation)
=========================================================
Next:
TD : Guest Dashboard / non-login content
TD : Admin dashboard with user list

1. Flows
    -> company 
        -> company description page (HQ, email contact, official website link)    
        -> home page is company page
            -> can view own job board (all jobs with statuses and applicants)
            -> manage applications
            -> add jobs or remove existing jobs
        -> search for experts
    -> expert   
        -> can add/edit a profile (see fields below)
        -> can view jobs board and search
2. Job
    -> description
    -> list of requirements
    -> list of skills
    -> languages
    -> expected start date (NULLABLE)
3. Expert
    -> name
    -> gender (2 options)
    -> profile pic
    -> work experience
    -> skills
    -> education
    -> github link
    -> linkedin link
    -> status (looking / invisible)
    -> known languages
4. Application
    -> company
    -> candidate
    -> date
    -> status (new, approved, rejected)