# SleepTrack
Version: 0.1b

# Frontend Solution
This section provides the frontend solution for the system. 

## Structure
### Dashboard
Main point of information of the application. The data is presented in a readable format and the user can request additional information using filtering and searching options. 

### Web Data Insertion System (WDIS)
Version: 0.1b

WDISv1: Provides the unique entry point of data for the SleepTrack system. 

1. New Entry
    * User access to the entry point.
    * User selects New Entry button.
    * New Entry is created with the basic information.

2. Pending Entries
    * If pending entries are available, an indicator apppears.
    * User access to pending entries.
    * User selects the pending entry to complete.

3. Closing Entry
    * The pending entry is opened
    * User completes the remaining information requested
    * The entry is closed. 

4. Rate a day. 
    * Last 3 days without rating can be rated. 
    * If one of the last 3 days have no rate, the button is available.
    * Once the user clicks on Rate a Day, you can rate a day from 0 to 5 stars. 
    * The associated entry is updated. 

