# Profile view counter

A small Cloudflare Worker with a D1 database. The site (index.html, `VIEWS_API`) calls it on every swimmer page and on the home page ("Most viewed profiles"). One view per visitor per profile per day; IPs are hashed with the day and never stored. Free-tier limits (100k Worker requests and 100k D1 writes a day) are far above current traffic.

Setup (once, needs a Cloudflare login):

```
cd worker
npx wrangler login
npx wrangler d1 create aciksumasters-views      # copy the database_id into wrangler.toml
npx wrangler d1 execute aciksumasters-views --remote --file schema.sql
npx wrangler secret put SALT                    # any random string
npx wrangler deploy                             # prints https://aciksumasters-views.<account>.workers.dev
```

Then set `VIEWS_API` in index.html to that URL. While it is empty the counter is off and nothing is shown.
