import { CategoryModel } from "./models/Category"
import { ProductModel } from "./models/Product"
import { User, UserRole } from "./models/User"
import { Cart } from "./cart/Cart"

const electronics = new CategoryModel(1, "Eletrônicos")

const phone = new ProductModel(1, "Smartphone", 2500, electronics)
const notebook = new ProductModel(2, "Notebook", 4500, electronics)

const user = new User(1, "João", "joao@email.com", UserRole.CUSTOMER)

const cart = new Cart()

cart.addItem(phone, 1)
cart.addItem(phone, 2)
cart.addItem(notebook, 1)

console.log("Usuário:", user.username)
console.log("Total de itens:", cart.getTotalItems())
console.log("Valor final:", cart.getFinalPrice())