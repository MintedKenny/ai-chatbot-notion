Prerequisites

GitHub account
Netlify account
Anthropic API key

Step-by-Step Setup
1. Obtain an Anthropic API Key

Go to the Anthropic website and sign up for an account if you haven't already.
Navigate to the API section and generate a new API key.
Save this API key securely; you'll need it later.

2. Clone the Repository

Open your terminal or command prompt.
Run the following command to clone the repository:
Copygit clone https://github.com/MintedKenny/ai-chatbot-notion.git
Navigate into the cloned directory:
Copycd ai-chatbot-notion

3. Create a Netlify Account

Go to Netlify and sign up for an account if you don't have one.
Once logged in, you'll be taken to your Netlify dashboard.

4. Connect Your Git Repository to Netlify

In your Netlify dashboard, click "New site from Git".
Choose GitHub as your Git provider and authorize Netlify to access your GitHub account.
Select the repository you just cloned (ai-chatbot-notion).
In the deploy settings, ensure the following:
Publish directory: . (root directory)

5. Deploy Your Site

Click "Deploy site" to start the initial deployment.
Netlify will provide you with a randomly generated subdomain for your site (e.g., your-site-123abc.netlify.app).

6. Set Up Environment Variables

In your Netlify dashboard, go to Site settings > Build & deploy > Environment.
Click "Edit variables".
Add a new variable:
Key: ANTHROPIC_API_KEY
Value: Your Anthropic API key (obtained in step 1)

7. Redeploy Your Site

Go to the "Deploys" tab in your Netlify dashboard.
Click "Trigger deploy" and choose "Clear cache and deploy site".
This will ensure your site is using the newly added environment variable.

8. Add to Notion

Paste Netlify site link directly into Notion.
Should work! You now have your own AI chatbot widget powered by Claude AI models and hosted on Netlify.

Troubleshooting

If you encounter any errors related to the Anthropic API, double-check that your API key is correct and properly set in the Netlify environment variables.
For other issues, check the Netlify function logs in your Netlify dashboard under Functions > ai-chatbot-notion > Logs.