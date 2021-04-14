/**
 * Simple localStorage with Cookie Fallback
 * v.1.0.0
 *
 * USAGE:
 * ----------------------------------------
 * Set New / Modify:
 *   store('my_key', 'some_value');
 *
 * Retrieve:
 *   store('my_key');
 *
 * Delete / Remove:
 *   store('my_key', null);
 */

export default function store(key, value)
{
    // Check for native support
    let lsSupport = !!localStorage;

    // If value is detected, set new or modify store
    if (typeof value !== "undefined" && value !== null) {
        if (typeof value === 'object' )
            value = JSON.stringify(value);

        // Set the store
        lsSupport ? localStorage.setItem(key, value) : createCookie(key, value, 30);
    }

    // No value supplied, return value
    if (typeof value === "undefined")
    {
        // Get value
        let data = lsSupport ? localStorage.getItem(key) : readCookie(key);

        // Try to parse JSON...
        try {
            data = JSON.parse(data);
        }
        catch(e) {}

        return data;
    }

    // Null specified, remove store
    if (value === null)
        lsSupport ? localStorage.removeItem(key) : createCookie(key, '', -1);

    /**
     * Creates new cookie or removes cookie with negative expiration
     * @param  key       The key or identifier for the store
     * @param  value     Contents of the store
     * @param  exp       Expiration - creation defaults to 30 days
     */
    function createCookie(key, value, exp) {
        let date = new Date();
        date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
        const expires = "; expires=" + date.toGMTString();
        document.cookie = key + "=" + value + expires + "; path=/";
    }

    /**
     * Returns contents of cookie
     * @param  key       The key or identifier for the store
     */
    function readCookie(key)
    {
        const nameEQ = key + "=";
        const ca = document.cookie.split(';');
        for (let i = 0, max = ca.length; i < max; i++)
        {
            let c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);

            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
};