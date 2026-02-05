import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class PendingChangesService {
  private _pending = false;
  private _activeDialog: MatDialogRef<any> | null = null;

  setActiveDialog(ref: MatDialogRef<any> | null) {
    this._activeDialog = ref;
  }

  clearActiveDialog() {
    this._activeDialog = null;
  }

  setPending(v: boolean) {
    this._pending = v;
  }

  clear() {
    this._pending = false;
  }

  isPending(): boolean {
    return this._pending;
  }

  // Called by the router guard to confirm navigation. If the user accepts,
  // clear the pending flag and close any open dialog that was registered.
  confirmNavigation(): boolean {
    console.log('[PendingChangesService] confirmNavigation called; pending=', this._pending);
    // If nothing pending, still close any registered dialog and allow navigation
    if (!this._pending) {
      try {
        this._activeDialog?.close();
      } catch {
        /* ignore */
      }
      this._activeDialog = null;
      return true;
    }

    const ok = window.confirm('You have unsaved changes. Leave without saving?');
    console.log('[PendingChangesService] user response:', ok);
    if (ok) {
      this._pending = false;
      try {
        this._activeDialog?.close();
      } catch {
        /* ignore */
      }
      this._activeDialog = null;
    }
    return ok;
  }
}
