module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: "167.235.141.236",
      username: "root",
      // pem: "~/.ssh/id_rsa",
      // password:"fotoposter"
      // or neither for authenticate from ssh-agent
      // gedaan met ssh-agent, zie meteor docs,eerst: eval $(ssh-agent), dan: ssh-add ~/.ssh/id_rsa, daarna: mup setup, mup deploy, ssh-agent -k
    },
  },

  app: {
    // TODO: change app name and path
    name: "wonderwalltest",
    path: "../.",

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: "http://wonderwall-fine.art",
      MONGO_URL: "mongodb://mongodb/meteor",
      MONGO_OPLOG_URL: "mongodb://mongodb/local",
    },

    docker: {
      image: "zodern/meteor:root",
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,
  },

  mongo: {
    version: "4.4.12",
    servers: {
      one: {},
    },
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
