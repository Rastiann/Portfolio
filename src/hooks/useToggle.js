import { useState } from "react"

/**
 * Hook used to toggle a value
 * @param {Boolean} initiale - Initial value of the toggle
 * @returns {[Boolean, Function]} Current value and toggle function
 */
export default function useToggle(initiale) {
    const [value, setValue] = useState(initiale)
    const toggle = () => setValue((v) => !v)
    return [value, toggle]
}
