import Nav from '../components/Nav'
import {useState} from 'react'

const OnBoarding = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        full_name: '',
        show_gender: true,
        gender_identity: '',
        gender_interest: '',
        sleeping_period: '',
        animals_q: '',
        alc_q: '',
        smoking_q: '',
        f_or_r: '',
        clean: '',
        email: '',
        about: '',
        matches: []
    })

    const handleSubmit = () => {
        console.log(formData)
        console.log('submitted')
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value
        const name = e.target.name
        console.log('value' + value, 'name' + name)

        setFormData((prevState) =>({
            ...prevState,
            [name] : value
        }))
    }

    console.log(formData)


    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="full_name">Name</label>
                        <input
                            id="full_name"
                            type='text'
                            name="full_name"
                            placeholder="First Last Name"
                            required={true}
                            maxLength="20"
                            value={formData.full_name}
                            onChange={handleChange}
                        />

                        <label>Pronouns</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="he/him"
                                onChange={handleChange}
                                checked={formData.gender_identity === "he/him"}
                            />
                            <label htmlFor="man-gender-identity">He/Him</label>
                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="she/her"
                                onChange={handleChange}
                                checked={formData.gender_identity === "she/her"}
                            />
                            <label htmlFor="woman-gender-identity">She/Her</label>
                            <input
                                id="they-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="they"
                                onChange={handleChange}
                                checked={formData.gender_identity === "they"}
                            />
                            <label htmlFor="they-gender-identity">They/Them</label>
                            <input
                                id="ask-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="ask"
                                onChange={handleChange}
                                checked={formData.gender_identity === "ask"}
                            />
                            <label htmlFor="ask-gender-identity">Ask❔</label>
                        </div>

                        <label htmlFor="show-gender">Show Pronouns on my Profile </label>
                        <div className="gender-yes-no">
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />
                        </div>

                        <label>Room With 🏠</label>
                        <div className="room-with-desc"><a>*As chosen on hosuing preferences. For gender inclusive housing, click "Inclusive". </a></div>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === "man"}
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === "woman"}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === "everyone"}
                            />
                            <label htmlFor="everyone-gender-interest">Inclusive</label>

                        </div>

                        <label>Sleeping Period 💤</label>
                        <div className="multiple-input-container">
                            <input
                                id="early_sleeping_period"
                                type="radio"
                                name="sleeping_period"
                                value="early"
                                onChange={handleChange}
                                checked={formData.sleeping_period === "early"}
                            />
                            <label htmlFor="early_sleeping_period">Early 🌕</label>
                            <input
                                id="normal_sleeping_period"
                                type="radio"
                                name="sleeping_period"
                                value="normal"
                                onChange={handleChange}
                                checked={formData.sleeping_period === "normal"}
                            />
                            <label htmlFor="normal_sleeping_period">Normal 🌑</label>
                            <input
                                id="late_sleeping_period"
                                type="radio"
                                name="sleeping_period"
                                value="late"
                                onChange={handleChange}
                                checked={formData.sleeping_period === "late"}
                            />
                            <label htmlFor="late_sleeping_periodt">Night Owl 🦉</label>
                        </div>

                        <label>Service Animal / Pets 🐕‍🦺</label>
                        <div className="multiple-input-container">
                            <input
                                id="yes_animals_q"
                                type="radio"
                                name="animals_q"
                                value="yes"
                                onChange={handleChange}
                                checked={formData.animals_q === "yes"}
                            />
                            <label htmlFor="yes_animals_q">Yes</label>
                            <input
                                id="no_animals_q"
                                type="radio"
                                name="animals_q"
                                value="no"
                                onChange={handleChange}
                                checked={formData.animals_q === "no"}
                            />
                            <label htmlFor="no_animals_q">No</label>
                        </div>

                        <label>Alcohol 🍻</label>
                        <div className="multiple-input-container">
                            <input
                                id="yes_alc_q"
                                type="radio"
                                name="alc_q"
                                value="yes"
                                onChange={handleChange}
                                checked={formData.alc_q === "yes"}
                            />
                            <label htmlFor="yes_alc_q">Yes</label>
                            <input
                                id="no_alc_q"
                                type="radio"
                                name="alc_q"
                                value="no"
                                onChange={handleChange}
                                checked={formData.alc_q === "no"}
                            />
                            <label htmlFor="no_alc_q">No</label>
                        </div>

                        <label>Smoking 🚬</label>
                            <div className="multiple-input-container">
                            <input
                                id="yes_smoking_q"
                                type="radio"
                                name="smoking_q"
                                value="yes"
                                onChange={handleChange}
                                checked={formData.smoking_q === "yes"}
                            />
                            <label htmlFor="yes_smoking_q">Yes</label>
                            <input
                                id="no_smoking_q"
                                type="radio"
                                name="smoking_q"
                                value="no"
                                onChange={handleChange}
                                checked={formData.smoking_q === "no"}
                            />
                            <label htmlFor="no_smoking_q">No</label>
                        </div>

                        <label>People Over 🤼</label>
                            <div className="multiple-input-container">
                            <input
                                id="yes_people_over"
                                type="radio"
                                name="smoking_q"
                                value="yes"
                                onChange={handleChange}
                                checked={formData.people_over === "yes"}
                            />
                            <label htmlFor="yes_people_over">Yes</label>
                            <input
                                id="no_people_over"
                                type="radio"
                                name="people_over"
                                value="no"
                                onChange={handleChange}
                                checked={formData.people_over === "no"}
                            />
                            <label htmlFor="no_people_over">No</label>
                        </div>

                        <label>Friends or Just Roommates 💬</label>
                            <div className="multiple-input-container">
                            <input
                                id="friends_f_or_r"
                                type="radio"
                                name="f_or_r"
                                value="friends"
                                onChange={handleChange}
                                checked={formData.f_or_r === "friends"}
                            />
                            <label htmlFor="friends_f_or_r">Friends</label>
                            <input
                                id="room_f_or_r"
                                type="radio"
                                name="f_or_r"
                                value="rommates"
                                onChange={handleChange}
                                checked={formData.f_or_r === "roommmates"}
                            />
                            <label htmlFor="room_f_or_r">Roommates</label>
                        </div>

                        <label htmlFor="clean">Cleanliness Level🧼 (1-10)</label>
                        <input
                            id="clean"
                            type="number"
                            max={10}
                            maxLength={2}
                            name="clean"
                            required={true}
                            placeholder="1-10"
                            value={formData.clean}
                            onChange={handleChange}
                        />

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks..."
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <input type="submit"/>
                    </section>


                </form>
            </div>
        </>
    )
}
export default OnBoarding