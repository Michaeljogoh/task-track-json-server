## Deploy JSON Server to Vercel

A template to deploy [JSON Server](https://github.com/typicode/json-server) to [Vercel](https://vercel.com), allow you to run fake REST API online!

Demo from this repository: 

1. https://json-server-in.vercel.app
2. https://json-server-in.vercel.app/api/posts

![Powered by Vercel](https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg)

### How to use

1. Click "**Use this template**" or clone this repository.
2. Update or use the default [`task.json`](task.json) in the repository.
3. Sign Up or login into [Vercel](https://vercel.com).
4. From the Vercel dashboard, click "**+ New Project**" then "**Import**" your repository.
5. In the "**Configure Project**" screen, leave everything default and click "**Deploy**".
6. Wait until deployment is done, and your own JSON server is ready to serve!

## Default `db.json`

```json
{
  "tasks": [
        {
      "id": "b88839a5-56e1-4083-8aca-a0a4ad0f4740",
      "text": "this.getAllData()"
    },
    {
      "id": "fa7d1aea-59ff-4f7b-9e04-9251c20b6234",
      "text": "everywhere you go "
    },
    {
      "id": "f69d92fe-f721-40c1-8431-58d6da062d17",
      "text": "saas, iaas"
    }
  ]
}
```

## Enable write operations

By default, only GET operation is allowed, thanks to the contribution by [@VicAv99](https://www.github.com/VicAv99) at [#6](https://github.com/kitloong/json-server-vercel/issues/6), we can now enable write operations as well.

You can find the example code in [`api/server.js`](./api/server.js).

## Reference

1. https://github.com/typicode/json-server
2. https://vercel.com
3. https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel
