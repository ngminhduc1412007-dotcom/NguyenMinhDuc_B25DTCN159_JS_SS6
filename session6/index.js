// ================== ĐĂNG NHẬP ==================
let loginCount = 0;
let isLogin = false;

while (loginCount < 3) {
    let username = prompt("Nhập tên đăng nhập:");
    let password = prompt("Nhập mật khẩu:");

    if (username === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        isLogin = true;
        break;
    } else {
        loginCount++;
        alert(`Sai thông tin! Bạn còn ${3 - loginCount} lần thử.`);
    }
}

if (!isLogin) {
    alert("Tài khoản bị khóa!");
} else {

    // ================== MẢNG SÁCH ==================
    let books = ["Toán", "Văn", "Anh"];
    let choice;

    // ================== MENU ==================
    do {
        let menu = "===== MENU QUẢN LÝ THƯ VIỆN =====\n";
        menu += "1. Nhập thêm sách\n";
        menu += "2. Hiển thị danh sách sách\n";
        menu += "3. Tìm kiếm sách\n";
        menu += "4. Cập nhật tên sách\n";
        menu += "5. Đảo ngược danh sách\n";
        menu += "6. Nhập kho từ nguồn khác\n";
        menu += "7. Thoát\n";
        menu += "Chọn (1-7):";

        choice = Number(prompt(menu));

        switch (choice) {

            // ---------- 1. NHẬP THÊM SÁCH ----------
            case 1: {
                let input = prompt(
                    "Nhập tên các sách, cách nhau bằng dấu phẩy:\n"
                );

                if (input !== "") {
                    let newBooks = input.split(",");

                    for (let i = 0; i < newBooks.length; i++) {
                        books.push(newBooks[i].trim());
                    }

                    alert("Đã thêm sách!");
                } else {
                    alert("Không được để trống!");
                }
                break;
            }

            // ---------- 2. HIỂN THỊ DANH SÁCH ----------
            case 2: {
                console.log("DANH SÁCH SÁCH:");
                for (let i = 0; i < books.length; i++) {
                    console.log(i + 1 + ". " + books[i]);
                }

                console.log("DANH SÁCH SÁCH:");
                let index = 1;
                for (let book of books) {
                    console.log(index + ". " + book);
                    index++;
                }

                console.log("Chuỗi hiển thị:");
                console.log(books.join(" | ")); 

                alert("Đã in danh sách ra console (F12)");
                break;
            }

            // ---------- 3. TÌM KIẾM ----------
            case 3: {
                let search = prompt("Nhập tên sách cần tìm:");

                if (search === null || search.trim() === "") {
                    alert("Tên sách không hợp lệ!");
                } else {
                    let pos = books.indexOf(search.trim());

                    if (pos !== -1) {
                        alert("Tìm thấy tại vị trí: " + pos);
                    } else {
                        alert("Không tìm thấy sách!");
                    }
                }
                break;
            }

            // ---------- 4. CẬP NHẬT TÊN ----------
            case 4: {
                let oldName = prompt("Nhập tên sách cần sửa:");

                let index = books.indexOf(oldName);
                if (index !== -1) {
                    let newName = prompt("Nhập tên mới:");
                    if (newName !== "") {
                        books[index] = newName;
                        alert("Cập nhật thành công!");
                    }
                } else {
                    alert("Không tìm thấy sách!");
                }
                break;
            }   

            // ---------- 5. ĐẢO NGƯỢC ----------
            case 5: {
                books.reverse();
                alert("Đã đảo ngược danh sách!");
                break;
            }

            // ---------- 6. NHẬP KHO ----------
            case 6: {
                let otherBooks = ["Kỹ năng sống", "Truyện tranh"];
                books = books.concat(otherBooks);
                alert("Đã nhập thêm sách từ nguồn khác!");
                break;
            }

            // ---------- 7. THOÁT ----------
            case 7:
                alert("Thoát chương trình!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== 7);
}