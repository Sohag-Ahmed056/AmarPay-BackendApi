import { enVars } from "../config/env";
import { Provider, Role } from "../modules/user/user.interfaces";
import User from "../modules/user/user.models";
import bcrypt from "bcrypt";
export const createDefaultAdmin = async () => {
  try {
    // 1️⃣ Check if admin already exists by email
    const existingAdmin = await User.findOne({ email: enVars.DEFAULT_ADMIN_EMAIL || "admin@amarpay.com" });
    if (existingAdmin) {
      console.log("✅ Default AmarPay admin already exists");
      return;
    }

    // 2️⃣ Hash the password
    const hashedPassword = await bcrypt.hash(
      enVars.DEFAULT_ADMIN_PASSWORD || "admin123",
      Number(enVars.SALT_ROUND)
    );

    // 3️⃣ Create default AmarPay admin
    const adminUser = await User.create({
      name: "AmarPay Admin",
      email: enVars.DEFAULT_ADMIN_EMAIL || "admin@amarpay.com",
      phone: +8801302243428, // required field
      password: hashedPassword,
      role: Role.ADMIN,
      auths: [
        {
          provider: Provider.CREDENTIALS,
          providerId: enVars.DEFAULT_ADMIN_EMAIL || "admin@amarpay.com",
        },
      ],
    });

    console.log("🎉 Default AmarPay Admin Created Successfully");
    console.log(`👤 Name: ${adminUser.name}`);
    console.log(`📧 Email: ${adminUser.email}`);
    console.log(`📱 Phone: ${adminUser.phone}`);
    console.log(`🔑 Password: ${enVars.DEFAULT_ADMIN_PASSWORD || "admin123"}`);
  } catch (error) {
    console.error("❌ Error creating default AmarPay admin:", error);
  }
};