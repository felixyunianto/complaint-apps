<?php

namespace App\Http\Controllers\Restful;

use Illuminate\Http\Request;
use App\Models\Complaint;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ComplaintController extends Controller
{
    public function index(){
        $complaints = Complaint::with('complaintCategory')->orderBy('created_at')->get();

        return response()->json([
            "message" => 'Success Get Complaint',
            "status" => 200,
            "data" => $complaints
        ]);
    }

    public function indexApproved(){
        $approved = Complaint::with('complaintCategory')->where('status', 'Approved')->orderBy('created_at')->get();

        return response()->json([
            "message" => 'Success Get Approved Complaint',
            "status" => 200,
            "data" => $approved
        ]);
    }

    public function indexDecline(){
        $decline = Complaint::with('complaintCategory')->where('status', 'Decline')->orderBy('created_at')->get();

        return response()->json([
            "message" => 'Success Get Decline Complaint',
            "status" => 200,
            "data" => $decline
        ]);
    }

    public function indexWaiting(){
        $waiting = Complaint::with('complaintCategory')->where('status', 'Waiting')->orderBy('created_at')->get();

        return response()->json([
            "message" => 'Success Get Waiting Complaint',
            "status" => 200,
            "data" => $waiting
        ]);
    }

    public function show($id) {
        $complaints = Complaint::with('complaintCategory')->findOrFail($id);

        return response()->json([
            "message" => 'Success Get Complaint',
            "status" => 200,
            "data" => $complaints
        ]);
    }

    public function store(Request $request){
        $user = Auth::user();
        $complaint_image = null;

        if($request->complaint_image){
            $complaint_image = $request->file('complaint_image')->store('complaint_image');
        }

        $complaints = Complaint::create([
            'complaint_category_id' => $request->complaint_category_id,
            'complaint_content' => $request->complaint_content,
            'user_id' => $user->id,
            'complaint_image' => $complaint_image
        ]);

        return response()->json([
            "message" => 'Create a New Complaint is successful',
            "status" => 200,
            "data" => $complaints
        ]);
    }

    public function update(Request $request, $id){
        $complaints = Complaint::findOrFail($id);
        $complaints->update([
            'complaint_category_id' => $request->complaint_category_id,
            'complaint_content' => $request->complaint_content
        ]);

        return response()->json([
            "message" => 'Update Complaint is successful',
            "status" => 200,
            "data" => $complaints
        ]);
    }

    public function destroy($id) {
        $complaints = Complaint::findOrFail($id);
        $complaints->delete();

        return response()->json([
            "message" => 'Delete Complaint is successful',
            "status" => 200,
            "data" => $complaints
        ]);
    }
}
