import fs from 'fs';

const sourcePath = String.raw`C:\Users\Avi Gorga\.cursor\projects\c-Users-Avi-Gorga-OneDrive\assets\c__Users_Avi_Gorga_AppData_Roaming_Cursor_User_workspaceStorage_0e1162c7cf039d926d6f0e8add0cfcc4_images_logo.png-fc106779-ed42-4a8e-9ca9-38ca60d22f58.png`;
const destPath = 'public/logo.png';

try {
    fs.copyFileSync(sourcePath, destPath);
    const stats = fs.statSync(destPath);
    console.log('✓ SUCCESS! Logo copied!');
    console.log('✓ Location: public/logo.png');
    console.log('✓ Size:', Math.round(stats.size / 1024), 'KB');
    console.log('\n🚀 Next steps:');
    console.log('1. Close server (Ctrl+C)');
    console.log('2. Run: npm run dev');
    console.log('3. Refresh browser (F5)');
} catch (err) {
    console.error('✗ Error:', err.message);
}
