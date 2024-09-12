import InputText from "@/components/atoms/InputText"
import SideBar from "@/components/organisms/SideBar"
import Image from "next/image"

export default function EditProfile() {
  return (
    <>
      <section className="edit-profile overflow-auto">
        <SideBar ActiveMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <img
                      src="/img/avatar-1.png"
                      width="90"
                      height="90"
                      className="avatar img-fluid"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image
                        src="/icon/erase-avatar.svg"
                        width={24}
                        height={24}
                        alt="erase avatar icon"
                      />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <Image
                        src="/icon/upload-icon.svg"
                        width={90}
                        height={90}
                        alt="upload icon"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <InputText
                  label="Full Name"
                  // placeholder="Enter your name"
                  // id="name"
                  // name="name"
                  // describedBy="name"
                  // htmlFor="name"
                />
                <InputText
                  label="Email"
                  // placeholder="Enter your name"
                  // id="name"
                  // name="name"
                  // describedBy="name"
                  // htmlFor="name"
                />
                <InputText
                  label="Phone"
                  // placeholder="Enter your name"
                  // id="name"
                  // name="name"
                  // describedBy="name"
                  // htmlFor="name"
                />
                {/* <div className="pt-30">
                  <label
                    htmlFor="email"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill text-lg"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="pt-30">
                  <label
                    htmlFor="phone"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control rounded-pill text-lg"
                    id="phone"
                    name="phone"
                    aria-describedby="phone"
                    placeholder="Enter your phone number"
                  />
                </div> */}
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="submit"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
