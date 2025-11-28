# DNS Setup Guide for kaiacha.com on GitHub Pages

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/kaiacha/Portfolio_2026
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch:** `main` (or `gh-pages` if you're using that branch)
   - **Folder:** `/` (root) or `/out` (if deploying from the `out` folder)
4. Click **Save**

## Step 2: Add Custom Domain in GitHub

1. In the same **Settings** → **Pages** section
2. Under **Custom domain**, enter: `kaiacha.com`
3. Check **Enforce HTTPS** (this will be available after DNS is configured)
4. Click **Save**

GitHub will automatically create/update the `CNAME` file in your repository.

## Step 3: Configure DNS at Your Domain Registrar

You need to add DNS records at your domain registrar (where you purchased `kaiacha.com`).

### For Apex Domain (kaiacha.com)

For the root domain `kaiacha.com`, you need to add **A records** pointing to GitHub Pages IP addresses:

```
Type: A
Name: @ (or leave blank, depending on your DNS provider)
Value: 185.199.108.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**Note:** Some DNS providers may require you to add these as separate A records with the same name but different values.

### Alternative: Using ANAME/ALIAS (if supported)

Some DNS providers support ANAME or ALIAS records for apex domains:

```
Type: ANAME (or ALIAS)
Name: @
Value: kaiacha.github.io
TTL: 3600
```

## Step 4: Verify DNS Configuration

1. After adding the DNS records, wait a few minutes for DNS propagation
2. Go back to GitHub repository → Settings → Pages
3. GitHub will show a green checkmark when DNS is verified
4. Once verified, you can enable **Enforce HTTPS**

## Step 5: SSL Certificate

GitHub Pages automatically provisions SSL certificates via Let's Encrypt once DNS is verified. This usually takes a few minutes to a few hours.

## Troubleshooting

- **DNS not propagating?** Wait 24-48 hours for full propagation. Check with: `dig kaiacha.com` or https://dnschecker.org
- **Still not working?** Verify DNS records are correctly entered at your registrar
- **HTTPS not available?** Wait a few hours after DNS verification for SSL certificate provisioning
- **Site shows 404?** Make sure your build output is in the correct folder and GitHub Pages is pointing to the right branch/folder

## GitHub Pages IP Addresses (Updated)

GitHub Pages uses these IP addresses:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

## Additional Notes

- The `CNAME` file in the `public/` folder should contain `kaiacha.com` (already configured)
- GitHub Pages will automatically update the CNAME file when you add the custom domain
- Your site will be available at `kaiacha.com` once DNS is configured
- GitHub Pages supports custom domains on both free and paid plans
