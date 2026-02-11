const fs = require('fs');
const path = require('path');

const source = String.raw`C:\Users\Avi Gorga\.cursor\projects\c-Users-Avi-Gorga-OneDrive\assets\c__Users_Avi_Gorga_AppData_Roaming_Cursor_User_workspaceStorage_0e1162c7cf039d926d6f0e8add0cfcc4_images_logo.png-fc106779-ed42-4a8e-9ca9-38ca60d22f58.png`;
const dest = path.join(__dirname, 'public', 'logo.png');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('✓ Created public directory');
}

// Copy the logo file
try {
    fs.copyFileSync(source, dest);
    const stats = fs.statSync(dest);
    console.log('✓ Logo copied successfully!');
    console.log('✓ Location: public/logo.png');
    console.log('✓ Size:', Math.round(stats.size / 1024), 'KB');
    console.log('\n🚀 Now run: npm run dev');
} catch (error) {
    console.error('✗ Error:', error.message);
}
