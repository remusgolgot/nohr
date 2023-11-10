TD1 : Pull job type valid values from the same source (mongoose & backend validation)
TD2 : Pull company name from user during job creation 

1. Flows
    -> company
        -> can add new Jobs (Job Form to be part of a different page)
        -> any new job added is then tied to the company (visible in the job board)
        -> company description page (HQ, email contact, official website link)
        -> can view job board
        -> home page is company page
            -> manage applications
            -> add or remove existing jobs
            -> search for experts
    -> expert   
        -> can add a profile (see fields below)
        -> can view job board
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