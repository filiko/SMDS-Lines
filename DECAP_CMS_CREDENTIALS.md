# Decap CMS Access Credentials

## Access Information

### Admin Panel URL
- **Local Development**: `http://localhost:3000/admin/`
- **Production**: `https://yourdomain.com/admin/`

### Setup Instructions

1. **For Local Development:**
   - Run: `npx decap-server`
   - Navigate to: `http://localhost:3000/admin/`

2. **For Production (Netlify):**
   - Deploy to Netlify
   - Enable Git Gateway in Netlify settings
   - Access via: `https://yourdomain.com/admin/`

### Authentication

**Git Gateway Authentication:**
- Uses GitHub OAuth
- Requires admin access to the repository
- Users must be added as collaborators to the GitHub repo

### Content Structure

The CMS is configured to manage:

1. **Site Settings** (`content/site-settings.md`)
   - Company title, description, contact info
   - Hero section content
   - Business hours and address

2. **Services** (`content/services/`)
   - Individual service pages
   - Service descriptions and content

### File Locations

- **Admin Interface**: `public/admin/index.html`
- **Configuration**: `public/admin/config.yml`
- **Content**: `content/` directory
- **Uploads**: `public/uploads/` directory

### Important Notes

- All changes are committed directly to the Git repository
- Media uploads go to `public/uploads/`
- The CMS uses editorial workflow (draft → review → publish)
- Local backend is enabled for development

### Troubleshooting

If you can't access the admin panel:
1. Check if the site is deployed to Netlify
2. Ensure Git Gateway is enabled
3. Verify you have repository access
4. Check browser console for errors

### Support

For technical issues with Decap CMS:
- Documentation: https://decapcms.org/
- GitHub: https://github.com/decaporg/decap-cms
