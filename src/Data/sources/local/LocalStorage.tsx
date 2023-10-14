import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = () => {
    const save = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log("ERROR EN EL LOCAL STORAGE: " + error);
        }
    }

    const get = async (key: string) => {
        try {
            const item = await AsyncStorage.getItem(key);

            return item;
        } catch (error) {
            console.log("ERROR EN EL LOCAL STORAGE: " + error);
        }
    }

    const sessionDelete = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log("ERROR EN EL LOCAL STORAGE: " + error);
        }
    }

    return {
        save,
        get,
        sessionDelete
    }
}