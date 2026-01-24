import { useState, useEffect } from "react"

const ContactForm = ({ existingContact = {}, updateCallback }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const updating = Object.keys(existingContact).length !== 0

  useEffect(() => {
    if (updating) {
      setFirstName(existingContact.firstName || "")
      setLastName(existingContact.lastName || "")
      setEmail(existingContact.email || "")
    } else {
      setFirstName("")
      setLastName("")
      setEmail("")
    }
  }, [existingContact])

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = { firstName, lastName, email }

    const url = updating
      ? `http://127.0.0.1:5000/update_contact/${existingContact.id}`
      : "http://127.0.0.1:5000/create_contact"

    const response = await fetch(url, {
      method: updating ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const err = await response.json()
      alert(err.message)
    } else {
      if (updateCallback) updateCallback()
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name:</label>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>

      <div>
        <label>Last Name:</label>
        <input value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>

      <div>
        <label>Email:</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <button type="submit">
        {updating ? "Update Contact" : "Create Contact"}
      </button>
    </form>
  )
}

export default ContactForm
