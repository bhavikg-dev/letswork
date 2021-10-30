/**
 * config
 * application Configuration
 */

 let config = {
    appName: "Letswork",
    siteUrl: "https://faker.io/",
    apiUrl: "https://faker.io/",
    environment: "local",
};

const isProd = true;
const deploymentType = isProd ? "production" : "development";

if (deploymentType === "production") {
    config = {
        ...config,
        siteUrl: "https://faker.io/",
        apiUrl: "https://faker.io/",
        environment: "production",
    };
} else if (deploymentType === "staging") {
    config = {
        ...config,
        siteUrl: "https://faker.io/",
        apiUrl: "https://faker.io/",
        environment: "staging",
    };
} else if (deploymentType === "development") {
    config = {
        ...config,
        environment: "development",
    };
}

export default config;
