// ---------- ĐĂNG NHẬP ----------
let loginCount = 0;
let isLogin = false;

while (loginCount < 3) {
    let inputUser = prompt("Nhập tên đăng nhập:");
    let inputPass = prompt("Nhập mật khẩu:");

    if (inputUser === "admin" && inputPass === "12345") {
        alert("Đăng nhập thành công!");
        isLogin = true;
        break;
    } else {
        loginCount++;
        let remaining = 3 - loginCount;

        if (username !== "admin" && password !== "12345") {
        alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${remaining} lần thử.`);
        } else if (username !== "admin") {
        alert(`Sai tài khoản! Bạn còn ${remaining} lần thử.`);
        } else {
        alert(`Sai mật khẩu! Bạn còn ${remaining} lần thử.`);
        }
    }
}

if (!isLogin) {
    alert("Tài khoản bị khóa do nhập sai quá 3 lần.");
} else {

    // ---------- KHAI BÁO MẢNG ----------
    let books = ["Toán", "Văn", "Anh"];
    let choice;

    // ---------- MENU ----------
    do {
        let menu = "===== MENU QUẢN LÝ THƯ VIỆN =====\n";
        menu += "1. Nhập thêm sách\n";
        menu += "2. Hiển thị danh sách sách\n";
        menu += "3. Tìm kiếm sách\n";
        menu += "4. Cập nhật tên sách\n";
        menu += "5. Đảo ngược thứ tự sách\n";
        menu += "6. Nhập kho từ nguồn khác\n";
        menu += "7. Thoát\n";
        menu += "Vui lòng nhập lựa chọn của bạn (1-7):";

        choice = Number(prompt(menu));

        // ---------- 1. NHẬP THÊM SÁCH ----------
        if (choice === 1) {
            let numberBook = prompt("Bạn muốn nhập bao nhiêu cuốn sách?");
            numberBook = Number(numberBook);

            if (numberBook > 0) {
                for (let i = 0; i < numberBook; i++) {
                    let bookName = prompt("Nhập tên sách thứ " + (i + 1));
                    if (bookName !== "") {
                        books.push(bookName);
                    } else {
                        alert("Tên sách không được để trống!");
                        i--;
                    }
                }
            } else {
                alert("Số lượng không hợp lệ!");
            }

        // ---------- 2. HIỂN THỊ DANH SÁCH ----------
        } else if (choice === 2) {
            console.clear();
            if (books.length === 0) {
                console.log("Danh sách sách đang trống.");
            } else {
                console.log("DANH SÁCH SÁCH:");
                for (let i = 0; i < books.length; i++) {
                    console.log((i + 1) + ". " + books[i]);
                }
            }
            alert("Đã in danh sách ra console (F12).");

        // ---------- 3. TÌM KIẾM SÁCH ----------
        } else if (choice === 3) {
            let searchName = prompt("Nhập tên sách cần tìm:");
            let found = false;

            for (let i = 0; i < books.length; i++) {
                if (books[i] === searchName) {
                    alert("Tìm thấy sách tại vị trí index: " + i);
                    found = true;
                    break;
                }
            }

            if (found === false) {
                alert("Không tìm thấy sách.");
            }

        // ---------- 4. CẬP NHẬT TÊN SÁCH ----------
        } else if (choice === 4) {
            let oldName = prompt("Nhập tên sách cần sửa:");
            let updated = false;

            for (let i = 0; i < books.length; i++) {
                if (books[i] === oldName) {
                    let newName = prompt("Nhập tên sách mới:");
                    if (newName !== "") {
                        books[i] = newName;
                        alert("Cập nhật thành công!");
                        updated = true;
                    }
                    break;
                }
            }

            if (updated === false) {
                alert("Không tìm thấy sách để cập nhật.");
            }

        // ---------- 5. ĐẢO NGƯỢC THỨ TỰ ----------
        } else if (choice === 5) {
            let temp;
            for (let i = 0; i < books.length / 2; i++) {
                temp = books[i];
                books[i] = books[books.length - 1 - i];
                books[books.length - 1 - i] = temp;
            }
            alert("Đã đảo ngược thứ tự sách!");

        // ---------- 6. NHẬP KHO TỪ NGUỒN KHÁC ----------
        } else if (choice === 6) {
            let otherBooks = ["Sách Kỹ Năng", "Truyện Tranh"];
            books = books.concat(otherBooks);
            alert("Đã nhập thêm sách từ nguồn khác!");

        // ---------- 7. THOÁT ----------
        } else if (choice === 7) {
            alert("Thoát chương trình!");

        } else {
            alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== 7);
}