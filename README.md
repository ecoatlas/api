# Eco Atlas API

The easiest way to get users' information and Eco Points balance. Open API with instant queries for a real-time summary in categorized and dynamic endpoints.

## Discord Query

**Full summary**: Endpoint with a full summary of a user ID on Discord.

```https://api.ecoatlas.io/discord/USER_ID```

Make sure to replace `USER_ID` with the user ID you want to retrieve the summary.

---

**Points balance**: Endpoint with individual account balance of Eco Points on the Eco server.

```https://api.ecoatlas.io/discord/eco/USER_ID```

Make sure to replace `USER_ID` with the user ID you want to retrieve the balance.

---

**Points leaderboard**: Endpoint with a leaderboard of Eco Points on Discord.

```https://api.ecoatlas.io/discord/eco/leaderboard/10```

```https://api.ecoatlas.io/discord/eco/leaderboard/25```

```https://api.ecoatlas.io/discord/eco/leaderboard/50```

```https://api.ecoatlas.io/discord/eco/leaderboard/100```

```https://api.ecoatlas.io/discord/eco/leaderboard/500```

Change the last `number` of the endpoint with the amount of top balances from users you want to retrieve.
