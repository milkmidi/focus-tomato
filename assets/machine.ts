import { ActorRefFrom, createMachine, log } from 'xstate';

const lightMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDMD2BjArrAdASQDk8AVPAQQBkBiQaNTBpzQG0AGAXUVAAdVYBLAFx6oAduxAAPRAGYA7AEYcANgCcMgCxMAHEtkBWJkyXSANCACeUhdJyTtCptIBMCrTYUBfNybRZcAZWJkAErEVAIAtmAAtDywkZgczGxIIFy8AsKiEgiqGlYaspKaObIOSgoOuSbmCA5MqjgaOpLqTLIaDjKaHl4Y2Dj+QSGAkMaA0HKA1WaAOgqJoqn8giLJWbLSeaXSOo06yvo6VYi19Y3N+m0d0l2eIN59AApkAKq+AKJUgD5+gDF+08mz6QugS0oHA0HI4ts12k0cnsEIZrAYlDoHLIFM4mDppO5LtdcHdHi9ALOJgFoor6cbhzDKLRCqJTAprSI5KVTLBSqaGFeQODq6Jw6VTowzdK69XCkACyTwA+nhfBL7jcqIACpR0gDAlQAYKSSUmTfplEApZDT8o4HLzam1LGz7DgCjJJPqNOpDEpBdicGLJdLZfKiRqfvMdQhHPIZDpeYimiDVKyzFTIzgVHZQdJtEnLB5LkJUBA4KJsTMtX7KQhIlZ6aWOqpOfpLLpoTTGYCtpYmJYNPaHM7hfgiKRKHm0gX-lSmDgkaOMeikypJND1ECSknZIvg7I6h2fP0AsE++S-uILPUmJIjypS+toQdFGj7dJCs4HKpU1jO7jntvtYWK+e6peNqob832gfaQ1z6N0pRlOU3wHPcEBRIFgwfPQFEkDRXC-eo7F-f87yAtM3CAA */
  id: 'focus',
  initial: 'INITIAL',
  states: {
    INITIAL: {
      on: {
        "開始": 'START'
      }
    },

    START: {
      on: {
        'time-is-up': 'TIME_IS_UP',
        "按下暫停": "PAUSE"
      },
    },

    PAUSE: {
      on: {
        繼續: 'START',
        重設: 'INITIAL',
      },
    },

    TIME_IS_UP: {
      on: {
        '加5分鐘': 'START',
        重設: 'INITIAL',
      }
    }
  },
});

export default lightMachine;
