#!/usr/bin/env zx

// Import modules
const { question } = require('zx');

// Function to create the domain structure
const createDomain = async (domainName) => {
    cd(`src/domains`);
    await $`mkdir ${domainName}`;

    // Create the files
    await Promise.all([
        $`touch ${domainName}/api.js`,
        $`touch ${domainName}/event.js`,
        $`touch ${domainName}/index.js`,
        $`touch ${domainName}/dto.js`,
        $`touch ${domainName}/schema.js`,
        $`touch ${domainName}/service.js`,
    ]);
};

// Main interaction loop
const main = async () => {
    // Use `question` to get user input
    const domainName = await question('Enter the domain name: ');
    console.log(`Creating domain ${domainName}`);

    // Create the domain
    await createDomain(domainName);
};

// Run the main function
main();
