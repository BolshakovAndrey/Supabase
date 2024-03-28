import {useEffect, useState} from "react";
// import { createClient } from '@supabase/supabase-js'
import SupaBaseAdapter from "../Wraper/SupabaseAdapter"; // Импортируем адаптер
// import FirebaseAdapter from "../Wraper/FirebaseAdapter.js"; // Импортируем адаптер

function App() {
    const [countries, setCountries] = useState([]);

    // Create a single supabase client for interacting with your database
    // const supabase = createClient("https://ovrlgavxrimsbzasyyam.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92cmxnYXZ4cmltc2J6YXN5eWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4OTE0NjAsImV4cCI6MjAyMzQ2NzQ2MH0.YFi95zEJjvxJowPYw3dsElpfEKauxmXx111CV7HUrgk");

    const supaBaseAdapter = new SupaBaseAdapter(); // Создаем экземпляр адаптера supabase
    // const fireBaseAdapter = new FirebaseAdapter(); // Создаем экземпляр адаптера firebase

    // Supabase API as is
    // useEffect(() => {
    //     insertCountry();
    //     getCountries();
    //     deleteCountry();
    // }, []);

    // Universal adapter  for Supabase
    useEffect(() => {
        async function fetchCountryData() {
            await supaBaseAdapter.globalInsertCountry({ id: 4, name: 'Russia' }); // Используем адаптер для вставки
            await supaBaseAdapter.globalDeleteCountry({ name: 'Serbia' }); // Используем адаптер для удаления
            const countries = await supaBaseAdapter.globalGetCountries(); // Используем адаптер для выборки
            setCountries(countries);
        }
        fetchCountryData();
    }, []);


    // Universal adapter  for FIREBASE
    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         await fireBaseAdapter.globalInsertCountry({ id: 5, name: 'Russia' }); // Используем адаптер для вставки
    //         await fireBaseAdapter.globalDeleteCountry({ name: 'India' }); // Используем адаптер для удаления
    //         const countries = await fireBaseAdapter.globalGetCountries(); // Используем адаптер для выборки
    //         setCountries(countries);
    //     };
    //
    //     fetchCountries();
    // }, []);

    // async function getCountries() {
    //     const {data} = await supabase
    //         .from("countries")
    //         .select();
    //     setCountries(data);
    // }
    //
    // async function insertCountry() {
    //     const {data, error} = await supabase
    //         .from('countries')
    //         .insert({id: 4, name: 'Serbia'})
    //         .select()
    // }
    //
    // async function deleteCountry(data) {
    //     const { error } = await supabase
    //         .from('countries')
    //         .delete()
    //         .eq('name', 'Russia')
    // }


    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name}>{country.name}</li> // Используем id в качестве ключа для уникальности
            ))}
        </ul>
    );
}

export default App;
