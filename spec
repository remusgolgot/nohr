Main Epics:

1. Admin Dashboard 
  - charts
    - nr of experts, jobs, applications, companies
    - below user table
  - actions to delete and disable users

2. Guest Homepage
  - non-login content / landing page

3. Company
    -> company description page (HQ, email contact, official website link)    
    -> home page is company page
        -> can view own job board (all jobs with statuses and applicants)
        -> manage applications
        -> add jobs or remove existing jobs
    -> search for experts

4. Expert
    -> can add a profile (see fields below)
    -> can edit a profile (see fields below)  
    -> can view jobs board and search for jobs
==========================================================
Models: 

1. Job
    -> description
    -> list of requirements
    -> list of skills
    -> languages
    -> expected start date (NULLABLE)

2. Expert
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

3. Application
    -> company
    -> candidate
    -> date
    -> status (new, approved, rejected)
========================================

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
