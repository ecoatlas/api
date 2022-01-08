# Eco Atlas API

An open API with instant queries for a real-time summary in categorized and dynamic endpoints. An easy way to get users' information and Eco Points balance.


## Discord Endpoint

The Discord endpoint utilizes uniquely identifiable descriptors (IDs) to access live data, IDs are guaranteed to be unique across all Discord so they're the best way to be sure certain information corresponds to a specific user.


## Discord Query

### **Full Summary**

Endpoint with a summary of the top-ranking holders of Eco Points on Discord.

```https://api.ecoatlas.io/discord/leaderboard```

Make sure to replace `USER_ID` with the user ID you want to retrieve the summary.

```https://api.ecoatlas.io/discord/USER_ID```

Endpoint with a full summary of a user ID on Discord. Make sure to replace USER_ID with the user ID you want to retrieve the information.


### **Points Balance**

Endpoint with account balances of the top-ranking holders of Eco Points on Discord.

```https://api.ecoatlas.io/discord/points/leaderboard```

Change the last `number` of the endpoint with the amount of top balances from users you want to retrieve.

```https://api.ecoatlas.io/discord/points/USER_ID```
