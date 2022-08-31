export interface IData {
    op: string;
    heartbeat_interval?: number;
    timeout_ms?: number;
    encrypted_nonce?: string;
    fingerprint?: string;
    encrypted_user_payload?: string;
    encrypted_token?: string;
}