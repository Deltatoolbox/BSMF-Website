# BSMF Website - Back Stabbing Mother Fuckers

A modern, military-themed website for the BSMF Ground Branch MILSIM team.

## 🎯 Features

- **Modern Military Design**: OCP camouflage pattern with animated military silhouettes
- **Responsive Layout**: Works perfectly on PC and mobile devices
- **Interactive Gallery**: Drag & drop image upload functionality
- **Event Showcase**: 5 different event types with detailed descriptions
- **Training Programs**: CQB-focused training with 4 specialized areas
- **Active Team Members**: 8 team roles with descriptions and statistics
- **Server Rules**: Clear, professional presentation of community rules
- **Blog Section**: For news and updates
- **Contact Form**: Easy communication with the team
- **Discord Integration**: Prominent Discord join buttons
- **Home Button**: BSMF logo links to homepage on all pages

## 📁 File Structure

```
BSMF website/
├── index.html          # Main website file
├── missions.html       # Detailed missions page
├── gallery.html        # Gallery with image management
├── tactics.html        # Tactical training guides
├── blog.html           # Blog and news section
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── logo.webp           # Team logo
├── images/             # Image folder for gallery
└── README.md           # This file
```

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No server required**: This is a static website that runs locally
3. **Upload images**: Use the gallery section to upload team photos

## 🎨 Customization

### Colors
The website uses CSS variables for easy color customization. Edit these in `styles.css`:

```css
:root {
    --primary-color: #2d5016;      /* Dark green */
    --secondary-color: #4a7c59;    /* Medium green */
    --accent-color: #8b4513;       /* Brown accent */
    --dark-bg: #1a1a1a;           /* Dark background */
    --light-bg: #2a2a2a;          /* Light background */
}
```

### Logo
Replace `logo.webp` with your own logo file. Supported formats: PNG, JPG, WebP, SVG.

### Gallery Images
Add your images to the `images/` folder and update the gallery section in `gallery.html`. Follow the provided code examples for proper formatting.

### Discord Link
Update the Discord invite link in `script.js`:
```javascript
const discordUrl = 'https://discord.gg/your-actual-invite-link';
```

### Team Members
Edit the key members section in `index.html`:
```html
<div class="member-card">
    <div class="member-avatar">
        <i class="fas fa-user-shield"></i>
    </div>
    <h3>Member Name</h3>
    <p class="member-rank">Role/Rank</p>
</div>
```

## 📱 Features Explained

### Gallery Management
- **Folder-Based**: Add images to the `images/` folder
- **Category Filtering**: Filter images by missions, team, events, tactics
- **Admin Control**: Only you can add images by editing the HTML
- **Responsive Grid**: Images display in a responsive grid layout

### Mobile Navigation
- **Hamburger Menu**: Collapsible navigation on mobile devices
- **Smooth Scrolling**: All navigation links scroll smoothly to sections
- **Touch Friendly**: Optimized for touch interactions

### Animations
- **Military Silhouettes**: Animated background elements
- **Fade-in Effects**: Sections animate as you scroll
- **Hover Effects**: Interactive elements respond to mouse/touch
- **Stats Counter**: Animated number counters

## 🛠️ Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance
- Optimized images and animations
- Minimal JavaScript for fast loading
- Responsive design for all screen sizes

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast design
- Focus indicators

## 📝 Content Management

### Adding Blog Posts
Edit the blog section in `index.html`:
```html
<article class="blog-card">
    <div class="blog-image">
        <i class="fas fa-newspaper"></i>
    </div>
    <div class="blog-content">
        <h3>Your Blog Title</h3>
        <p class="blog-date">Date</p>
        <p>Your blog content here...</p>
        <a href="#" class="read-more">Read More</a>
    </div>
</article>
```

### Updating Events
Edit the events section in `index.html`:
```html
<div class="event-card">
    <div class="event-icon">🟢</div>
    <h3>Event Title</h3>
    <p>Event description...</p>
</div>
```

### Modifying Rules
Update the rules section in `index.html`:
```html
<div class="rule-card">
    <div class="rule-icon">
        <i class="fas fa-users"></i>
    </div>
    <h3>Rule Title</h3>
    <p>Rule description...</p>
</div>
```

## 🎯 Deployment

### Local Development
1. Open `index.html` in your browser
2. Make changes to files
3. Refresh browser to see updates

### Web Hosting
1. Upload all files to your web hosting service
2. Ensure `index.html` is in the root directory
3. Test all functionality online

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

## 🔧 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure image files exist in the same directory
- Try different image formats (PNG, JPG, WebP)

### Gallery Upload Not Working
- Ensure you're using a modern browser
- Check browser console for JavaScript errors
- Try refreshing the page

### Mobile Menu Not Working
- Check if JavaScript is enabled
- Try clearing browser cache
- Test on different mobile devices

## 📞 Support

For issues or questions:
1. Check the browser console for error messages
2. Ensure all files are in the same directory
3. Test in different browsers
4. Verify file permissions

## 🎖️ BSMF Team Info

- **Team Name**: BSMF (Back Shooting Mother Fuckers)
- **Game**: Ground Branch
- **Focus**: MILSIM tactical operations
- **Members**: 20-30 active, 150+ Discord community
- **Events**: Tactical teamplay, military realism, fun ops, competitions

---

*Built with modern web technologies for the BSMF tactical operations team.* 