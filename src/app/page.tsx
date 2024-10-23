// app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";

export default function Author() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6">
        <div className="flex flex-col items-center">
          <Image
            src="/lofQ8H770a15H6F0dXabUjApwQP9vQWmaGfOFgqiMr3HEQpTA.jpg"
            alt="Profile picture of a person"
            className="rounded-full mb-4"
            width={100}
            height={100}
          />
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-3/4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Author</h1>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Go back
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className={styles.formLabel}>Full Name</label>
            <input
              className={styles.formInput}
              placeholder="Micah Christenson"
              type="text"
              readOnly
              value="Micah Christenson"
            />
          </div>
          <div>
            <label className={styles.formLabel}>Email</label>
            <input
              className={styles.formInput}
              placeholder="Christenson@mail.com"
              type="email"
              readOnly
              value="Christenson@mail.com"
            />
          </div>
          <div>
            <label className={styles.formLabel}>Created Date</label>
            <input
              className={styles.formInput}
              placeholder="01/01/2023"
              type="text"
              readOnly
              value="01/01/2023"
            />
          </div>
          <div>
            <label className={styles.formLabel}>User Name</label>
            <input
              className={styles.formInput}
              placeholder="Micah Christenson"
              type="text"
              readOnly
              value="Micah Christenson"
            />
          </div>
          <div>
            <label className={styles.formLabel}>Author Name</label>
            <input
              className={styles.formInput}
              placeholder="author name"
              type="text"
            />
          </div>
          <div>
            <label className={styles.formLabel}>Type</label>
            <input
              className={styles.formInput}
              placeholder="type"
              type="text"
            />
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
