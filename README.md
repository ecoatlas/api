
# Eco Atlas API

An open API with instant queries for a real-time summary in categorized and dynamic endpoints. The easiest way to get users' information and Eco Points balance.

## Discord Query

### **Full summary**

```https://api.ecoatlas.io/discord/USER_ID```

Endpoint with a full summary of a user ID on Discord. Make sure to replace `USER_ID` with the user ID you want to retrieve the summary.



### **Points balance**

```https://api.ecoatlas.io/discord/eco/USER_ID```

Endpoint with individual account balance of Eco Points on the Eco server. Make sure to replace `USER_ID` with the user ID you want to retrieve the balance.



### **Points leaderboard**


```https://api.ecoatlas.io/discord/eco/leaderboard/10```

```https://api.ecoatlas.io/discord/eco/leaderboard/25```

```https://api.ecoatlas.io/discord/eco/leaderboard/50```

```https://api.ecoatlas.io/discord/eco/leaderboard/100```

```https://api.ecoatlas.io/discord/eco/leaderboard/500```

Endpoint with a leaderboard of Eco Points on Discord. Change the last `number` of the endpoint with the amount of top balances from users you want to retrieve.



## How to access user IDs

Discord utilizes Twitter's <a href="https://discord.com/developers/docs/reference#snowflakes" target="_blank" rel="noreferrer">snowflake format</a> for uniquely identifiable descriptors (IDs), these IDs are guaranteed to be unique across all Discord. While accessing user data on Discord, the best way to be sure certain information corresponds to a specific user is through IDs, which are not the same as usernames. The former is unique and immutable, the latter can be easily changed in the user preferences.

Firstly, activate Developer Mode so you can have access to IDs:

1. Open the **User Settings**
2. Go to the tab **Advanced**
3. Enable the option **Developer Mode**

Lastly, to copy the user ID:

1. Right-click on a user profile picture or username
2. Choose the option "**Copy ID**"
3. The user ID will be copied to your clipboard

Please, be sure to use "**Copy ID**" from a **profile picture** or a **username**. Do not use "Copy ID" from a message, channel, or server because doing so will result in not getting the user ID, which won't work as expected.

