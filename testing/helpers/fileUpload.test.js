import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers";
// instalar setimmediate

cloudinary.config({
  cloud_name: "dmq9e2wuv",
  api_key: "337274324936165",
  api_secret: "sPsPThsK6YsThB2fA3ouxUtza1I",
  secure: true,
});

describe("pruebas en fileUpload", () => {
  test("debe subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://res.cloudinary.com/dmq9e2wuv/image/upload/v1678390505/journal/ualestxq8zt42cozdhv5.jpg";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
    const segments = url.split("/");
    const id = segments[segments.length - 1].replace(".jpg", "");
    const cloudResp = await cloudinary.api.delete_resources(["journal/" + id], {
      resource_type: "image",
    });
    // console.log({ cloudResp });
  });

  test("debe retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
