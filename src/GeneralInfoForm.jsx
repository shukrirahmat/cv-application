function GeneralInfoForm() {
    return (
        <form>
            <label>First Name 
                <input type="text"/>
            </label>
            <label>Last Name 
                <input type="text"/>
            </label>
            <label>Email Address
                <input type="mail"/>
            </label>
            <label>Phone Number 
                <input type="tel"/>
            </label>
            <button type="submit">SAVE</button>
        </form>
    )
}

export default GeneralInfoForm;