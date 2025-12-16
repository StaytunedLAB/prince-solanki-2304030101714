import { Octokit } from "octokit";
const octokit = new Octokit({
auth: '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' // or paste token directly
});

async function createIssue() {
try {
const response = await octokit.request(
"POST /repos/StaytunedLAB/prince-solanki-2304030101714/issues",
{
owner: "StaytunedLAB",
repo: "prince-solanki-2304030101714",
title: "REST API Issue",
body: "Creating an issue using REST API",
labels: ["Task"],
headers: {
"X-GitHub-Api-Version": "2022-11-28"
}
}
);

console.log("✅ Issue created successfully!");
} catch (error) {
console.error("❌ Error:", error.response?.data || error.message);
}

}

createIssue();