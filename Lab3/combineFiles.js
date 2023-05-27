const fs = require('fs');

// Đường dẫn đến file1.txt và file2.txt
const file1Path = 'file1.txt';
const file2Path = 'file2.txt';

// Đọc nội dung của file1.txt và file2.txt
const file1Content = fs.readFileSync(file1Path, 'utf-8');
const file2Content = fs.readFileSync(file2Path, 'utf-8');

// Kết hợp nội dung của file1.txt và file2.txt
const combinedContent = file1Content + ' ' + file2Content;

// Tạo file3.txt và ghi nội dung đã kết hợp vào đó
fs.writeFileSync('file3.txt', combinedContent, 'utf-8');

// Đọc nội dung của file3.txt và in ra màn hình
const file3Content = fs.readFileSync('file3.txt', 'utf-8');
console.log(file3Content);
