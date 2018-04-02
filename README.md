# TrainScheduler

*A handy way for travellers to keep track of when and where they can catch their trains.

##How it works:
    *The app uses firebase to store the information a user keys into the entry field at the bottom. Then the information is pulled from firebase and sent through moment.js, where the times are calculated and displayed on the current train schedule.
    
    *The clock at the top should keep the current time of the timezone in which the traveller finds him or herself.