<script lang="ts">
    import { SSX } from '@spruceid/ssx'

    let sessionKey = null

    const signIn = async () => {
        const ssx = new SSX({
            enableDaoLogin: false,
            resolveEns: false,
            providers: {
                web3: { driver: window.ethereum },
                server: { host: 'http://localhost:8000' },
            },
        })

        const result = await ssx.signIn()

        sessionKey = result.sessionKey
    }

</script>

{ #if !sessionKey }
    <button on:click={signIn}>Sign in with Ethereum</button>
{ :else }
    <h1>Authenticated</h1>
    <span>Session key: {sessionKey}</span>
{ /if }


