import { ref, getDownloadURL, getStorage} from "firebase/storage";

export default function obtenerVideo(path)
{
    let storage = getStorage();
    let storageRef = ref(storage, path);
    let urlVideo = getDownloadURL(storageRef).then((url) => {
        return url;
    });
    return urlVideo;
}