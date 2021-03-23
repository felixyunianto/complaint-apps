<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complaint;
use App\Models\ComplaintCategory;

class AdminComplaintController extends Controller
{
    public function index(){
        $complaints = Complaint::with(['complaintCategory', 'user'])->orderBy('created_at')->get();
        // dd($complaints);

        return view('pages.complaint.index', compact('complaints'));
    }

    public function show($id){
        $complaint = Complaint::with(['complaintCategory', 'user'])->findOrFail($id);
        // dd($complaint);

        return view('pages.complaint.complaint-detail', compact('complaint'));
    }

    public function update(Request $request, $id){
        $complaint = Complaint::findOrFail($id);
        $complaint->update([
            'status' => $request->status
        ]);

        return redirect()->route('complaint.index');
    }

}
