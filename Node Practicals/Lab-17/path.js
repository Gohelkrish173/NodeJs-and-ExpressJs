const path = require('node:path');

console.log(path.basename('C:\\temp\\myfile.html'))
console.log(path.dirname('/foo/bar/baz/asdf/quux'));
// Returns: '/foo/bar/baz/asdf' 

// path.isAbsolute('//server');    // true
// path.isAbsolute('\\\\server');  // true
// path.isAbsolute('C:/foo/..');   // true
// path.isAbsolute('C:\\foo\\..'); // true
// path.isAbsolute('bar\\baz');    // false
// path.isAbsolute('bar/baz');     // false
// path.isAbsolute('.');           // false 

console.log(path.join('Users', 'Refsnes', 'demo_path.js'));


console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));


console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));


console.log(path.resolve('/foo/bar', './baz'));


console.log(path.resolve('/foo/bar', '/tmp/file/'));

console.log(path.parse('C:\\temp\\myfile.html'));